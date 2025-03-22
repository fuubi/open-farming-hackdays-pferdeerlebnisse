import { createRoot } from 'react-dom/client'
import './index.css'

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
import { RoutenPage } from './AdminRouten';
import { BuchungenPage } from './AdminBuchungen';

const client = based({ url: "ws://localhost:8001", env: 'app' }, { maxCacheSize: 0 }) as BackendClient

const Root = () => {
  const [user, setUser] = useState()
  const [page, setPage] = useState('angebot') 

  useEffect(() => {
    client.calls['admin:get'].call({}).then(d => setUser(d.user))
  }, [])

  console.log("user ....", user)
  if(!user) return 'loading'
  return (
    <IxApplication style={{ height: '100vh', width: '100vw' }}>
      <IxApplicationHeader name="Pferdeerlebins Adminstration">
        <IxAvatar>
          <IxDropdownItem  label="Logout"></IxDropdownItem>
        </IxAvatar>
      </IxApplicationHeader>
      <IxMenu>
        <IxMenuItem onClick={() => setPage('angebot')} icon="bed">Angebot</IxMenuItem>
        <IxMenuItem onClick={() => setPage('routen')} icon="map">Routen</IxMenuItem>
        <IxMenuItem onClick={() => setPage('buchungen')} icon="calendar-check">Buchungen</IxMenuItem>
      </IxMenu>

    {

<RoutenPage user={user}/>
      // page === 'angebot' && <AngebotPage/>
      // ||
      // page === 'routen' && <RoutenPage user={user}/>
      // ||
      // page === 'buchungen' && <BuchungenPage/>

    } 
    </IxApplication>
  );
};


const root = createRoot(rootEl)
root.render(<Root />)

