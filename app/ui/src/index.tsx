import { createRoot } from 'react-dom/client'
import './index.css'
import { BackendClient } from '@ofhp/app-backend'

import based, { AuthState, BasedClient } from "@colombalink/based-client";

let rootEl = document.getElementById('root')
if (!rootEl) {
  rootEl = document.createElement('div')
  rootEl.id = 'root'
  document.body.appendChild(rootEl)
}

import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxDropdownItem,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-react';
import { useEffect, useState } from 'react';
import { AngebotPage } from './AdminAngebot';

const client = based({ url: "ws://localhost:8001", env: 'app' }, { maxCacheSize: 0 }) as BackendClient

const Root = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    client.calls['admin:get'].call({}).then(setUser)
  }, [])
  console.log("user ..", user)
  return (
    <IxApplication style={{ height: '100vh', width: '100vw' }}>
      <IxApplicationHeader name="Pferdeerlebins Adminstration">



        <IxAvatar>
          <IxDropdownItem label="Logout"></IxDropdownItem>
        </IxAvatar>
      </IxApplicationHeader>
      <IxMenu>
        <IxMenuItem icon="bed">Angebot</IxMenuItem>
        <IxMenuItem icon="map">Routen</IxMenuItem>
        <IxMenuItem icon="calendar-check">Buchungen</IxMenuItem>
      </IxMenu>

    <AngebotPage></AngebotPage>
    </IxApplication>
  );
};


const root = createRoot(rootEl)
root.render(<Root />)

