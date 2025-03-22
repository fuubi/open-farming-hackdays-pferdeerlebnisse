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
  IxButton,
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
import { themeSwitcher } from '@siemens/ix';
import { ContentRoutenNetz } from './user/RoutenNetz';

themeSwitcher.setTheme("theme-classic-light");


const client = based({ url: "ws://localhost:8001", env: 'app' }, { maxCacheSize: 0 }) as BackendClient

const Root = () => {
  const [user, setUser] = useState()
  const [page, setPage] = useState('angebot')

  useEffect(() => {
    client.calls['admin:get'].call({}).then(d => setUser(d.user))
  }, [])

  console.log("user ....", user)
  if (!user) return 'loading'

  if (location.pathname.includes("user")) {

    return (
      <div style={{ height: '100vh', width: '100vw' }}>
        <IxApplicationHeader name="Pferdeerlebnisse">
          <div slot="logo">
            <img
              style={{
                display: "inline-block",
                maxHeight: "56px",
                maxWidth: "225px",
                padding: "8px 4px 8px 12px",
                verticalAlign: "middle"
              }}

              src="https://lh5.googleusercontent.com/IAWaOPMUilF2S-BzSGFoLK9yL9LqTgsqXj9Kw52JifhC-NrGnTWMCtcI2LmQP2ydAdtYvDL5lF_869dmtcX1Jq8=w16383" class="lzy1Td" role="img" aria-label="Homepage der Website" jsname="SwcDWb"></img>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '20px' }}>
              Touren planen
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '20px' }}>
              Buchungen
            </span>
          </div>


          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '20px' }}>
              Über uns
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '20px' }}>
              Mehr erfahren
            </span>
          </div>

          {/* <IxButton style={{ marginRight: '20px' }}>
            Login
          </IxButton>

          <IxButton style={{ marginRight: '20px' }}>
            Anmelden
          </IxButton> */}

          <IxAvatar>
            <IxDropdownItem label="Logout"></IxDropdownItem>
          </IxAvatar>
        </IxApplicationHeader>

          <ContentRoutenNetz></ContentRoutenNetz>
      </div>
    );
  }


  return (
    <IxApplication style={{ height: '100vh', width: '100vw' }}>
      <IxApplicationHeader style={{ background: 'white' }} name="Pferdeerlebinsse Aargau Adminstration">
        <div slot="logo">
          <img
            style={{
              display: "inline-block",
              maxHeight: "56px",
              maxWidth: "225px",
              padding: "8px 4px 8px 12px",
              verticalAlign: "middle"
            }}

            src="https://lh5.googleusercontent.com/IAWaOPMUilF2S-BzSGFoLK9yL9LqTgsqXj9Kw52JifhC-NrGnTWMCtcI2LmQP2ydAdtYvDL5lF_869dmtcX1Jq8=w16383" class="lzy1Td" role="img" aria-label="Homepage der Website" jsname="SwcDWb"></img>
        </div>
        <IxAvatar>
          <IxDropdownItem label="Logout"></IxDropdownItem>
        </IxAvatar>
      </IxApplicationHeader>
      <IxMenu>
        <IxMenuItem onClick={() => setPage('angebot')} icon="building1">Angebot</IxMenuItem>
        <IxMenuItem onClick={() => setPage('routen')} icon="map">Routen</IxMenuItem>
        <IxMenuItem onClick={() => setPage('buchungen')} icon="calendar">Buchungen</IxMenuItem>
      </IxMenu>

      {

        (() => {

          if (page === 'angebot') return <AngebotPage />
          if (page === 'routen') return <RoutenPage user={user} />
          if (page === 'buchungen') return <BuchungenPage />
          return <div></div>
        })()

      }
    </IxApplication>
  );
};


const root = createRoot(rootEl)
root.render(<Root />)

