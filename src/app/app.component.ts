import { Component } from '@angular/core';
const MESIBO_STATUS_ONLINE  = 1;
const MESIBO_STATUS_CONNECTING = 6;
const MESIBO_STATUS_CONNECTFAILURE = 7;
const MESIBO_STATUS_SIGNOUT = 3;
const MESIBO_STATUS_AUTHFAIL = 4;

const MESIBO_CALLSTATUS_CHANNELUP = 0x30;
const MESIBO_CALLSTATUS_COMPLETE = 0x40;

let publisher;
const streams = [];
const MAX_STREAMS_COUNT = 4;
export class MesiboNotify {
  api: any;
  DEMO_GROUP_ID = 96760;
  DEMO_GROUP_NAME = 'group1';

  MESIBO_APP_ID = '8367';
  STREAM_SCREEN = 2;
  STREAM_CAMERA = 1;
  constructor(api) {
    this.api = api;
    this.Mesibo_OnParticipants = this.Mesibo_OnParticipants.bind(this);
  }
  Mesibo_OnPermission(on) {
    console.log('Mesibo_onPermission: ' + on);
    // show permission prompt
  }

  Mesibo_OnConnectionStatus(status) {
    console.log('Mesibo_OnConnectionStatus: ' + status);
    const s = document.getElementById('cstatus');
    if (!s) { return; }

    if (MESIBO_STATUS_ONLINE === status) {
      s.classList.replace('btn-danger', 'btn-success');
      s.innerText = publisher.getName() + ' is online';
      this.streamFromCamera();
      return;
    }

    s.classList.replace('btn-success', 'btn-danger');

    switch (status) {
      case MESIBO_STATUS_CONNECTING:
        s.innerText = 'Connecting';
        break;

      case MESIBO_STATUS_CONNECTFAILURE:
        s.innerText = 'Connection Failed';
        break;

      case MESIBO_STATUS_SIGNOUT:
        s.innerText = 'Signed out';
        break;

      case MESIBO_STATUS_AUTHFAIL:
        s.innerText = 'Disconnected: Bad Token or App ID';
        break;

      default:
        s.innerText = 'You are offline';
        break;
    }

  }

  Mesibo_OnParticipants(all, latest) {
    console.log('Mesibo_Onparticipants --- ');
    console.log(this);
    for (const i in latest) {
      if (i) {
        console.log('Mesibo_Onparticipants: ' + latest[i].getId());
        const p = latest[i];
        this.connectStream(p);
      }
    }
  }

  initStreams() {
    for (let i = 0; i < MAX_STREAMS_COUNT; i++) {
      streams[i] = null;
    }
  }

  connectStream(stream) {
    for (let i = 0; i < streams.length; i++) {
      if (streams[i] == null) {
        streams[i] = stream;
        streams[i].element_id = 'video-remote-' + i;
        this.subscribe(streams[i]);
        return;
      }
    }
  }

  subscribe(p) {
    console.log('====> subscribe', p.getId(), p.element_id);
    p.call(null, p.element_id, this.on_stream, this.on_status);
  }

  streamFromCamera() {
    console.log('streamFromCamera');
    const o: any = {};
    o.name = this.DEMO_GROUP_NAME;
    o.groupid = this.DEMO_GROUP_ID;
    o.source = this.STREAM_CAMERA;
    o.video = true;
    o.audio = true;

    console.log('local publisher', o, publisher, publisher.getName(), publisher.getId());

    publisher.call(o, 'video-publisher', this.on_stream, this.on_status);
  }

  streamFromScreen() {
    console.log('streamFromScreen');

    const o: any = {};
    o.peer = 0;
    o.name = this.DEMO_GROUP_NAME;
    o.groupid = this.DEMO_GROUP_ID;
    o.source = this.STREAM_SCREEN;

    console.log('local publisher', o);

    publisher.call(o, 'video-publisher', this.on_stream, this.on_status);
  }

  on_stream(p) {
    console.log('on_stream');

    // Local Stream
    if (p.isLocal()) {
      p.attach('video-publisher');
      return;
    }

    // Remote Stream
    console.log('===> on_stream', p.element_id, 'attach');
    p.attach(p.element_id);
  }

  on_status(p, status, video) {
    console.log('---onStatus-----');
    console.log(status);
    console.log('on_status', p.getId(), p.getName(), 'local?', p.isLocal(), ' status: 0x' + status.toString(16), video);

    if (MESIBO_CALLSTATUS_CHANNELUP === status) {
      console.log(p.getName() + ' is connected');
    }

    if (MESIBO_CALLSTATUS_COMPLETE === status) {
      console.log(p.getName() + ' has disconnected');
      // on_hangup(p);
    }
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MesiboConf';
  DEMO_GROUP_ID = 96760;
  DEMO_GROUP_NAME = 'group1';

  MESIBO_APP_ID = '8367';

  demoUsers = [{
    token: 'ed463970cec2f712144b9b0b707d1a253a0603535925edd13ad49',
    address: '2306202001',
    name: 'doctor1'
  }, {
    token: '529194e2cad857b607081d2b48cefd99cf92a595e26acf0edd13ad4c',
    address: '2306202002',
    name: 'patient2'
  }, {
    token: 'TOKEN_USER_2',
    address: 'ADDRESS_USER_2',
    name: 'User-2'
  }, {
    token: 'TOKEN_USER_3',
    address: 'ADDRESS_USER_3',
    name: 'User-3'
  }, {
    token: 'TOKEN_USER_4',
    address: 'ADDRESS_USER_4',
    name: 'User-4'
  }];

  live = null;
  publisher = null;
  streams = [];
  MAX_STREAMS_COUNT = 4;
  STREAM_CAMERA = 1;
  STREAM_SCREEN = 2;
  api: any;
  mesiboListener: any;
  public login(userIndex) {
    const selectedUser = this.demoUsers[userIndex];
    this.mesiboListener = new MesiboNotify(this.api);
    this.api = window['mesibo'];
    this.api.setAppName(this.MESIBO_APP_ID);
    this.api.setListener(this.mesiboListener);
    this.api.setCredentials(selectedUser.token);
    this.api.setDatabase('mesibo');
    this.api.start();

    this.mesiboListener.initStreams();

    // Create group call object
    this.live = this.api.initGroupCall();
    console.log(this.live);
    this.live.setRoom(this.DEMO_GROUP_ID);

    // Create a local participant, Set Publisher name and address
    console.log('====>create participant', selectedUser.name, selectedUser.address);
    publisher = this.live.getLocalParticipant(selectedUser.name, selectedUser.address);

    document.getElementById('conference-area').style.display = 'flex';
    document.getElementById('login-options').style.display = 'none';
  }

  streamFromCamera() {
    this.mesiboListener.streamFromCamera();
  }

  streamFromScreen() {
    this.mesiboListener.streamFromScreen();
  }
}
