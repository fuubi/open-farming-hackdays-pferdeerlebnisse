import React from 'react'
import {
  IxApplication,
  IxContent,
  IxContentHeader,
  IxInput,
  IxSelect,
  IxSelectItem,
  IxToggle,
  IxDatePicker,
  IxButton,
} from '@siemens/ix-react'

const sectionStyle: React.CSSProperties = {
  marginBottom: '2rem',
}

const headingStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  marginBottom: '1rem',
  color: 'var(--theme-color-primary)',
}

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
}

const actionsStyle: React.CSSProperties = {
  marginTop: '2rem',
}

export const AngebotPage = () => {
  return (
    <IxApplication>
      <IxContent>
        <IxContentHeader heading="Angebot erstellen" />

        {/* Übernachtungen */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Übernachtungen</h2>
          <div style={gridStyle}>
            <IxInput value='Doppelzimmer' label="Zimmer & Belegung" placeholder="z. B. 2 Einzelzimmer, 1 Doppelzimmer" />
            <IxSelect label="Verpflegungstyp" value="voll">
              <IxSelectItem label="Vollpension" value="voll" />
              <IxSelectItem label="Halbpension" value="halb" />
              <IxSelectItem label="Keine" value="keine" />
            </IxSelect>
            <IxInput value='3' type="number" label="Anzahl Kapazität" />
            <IxInput type="number" label="Kosten pro Nacht (CHF)" />
          </div>
        </section>

        {/* Stallung */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Stallung</h2>
          <div style={gridStyle}>
            <IxSelect label="Stallungstyp">
              <IxSelectItem label="Box" value="box" />
              <IxSelectItem label="Offenstall" value="offen" />
              <IxSelectItem label="Keine" value="keine" />
            </IxSelect>
            <IxInput type="number" label="Anzahl Plätze" />
            <IxInput type="number" label="Kosten pro Nacht (CHF)" />
          </div>
        </section>



        {/* Parkplatz */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Parkplatz</h2>
          <div style={gridStyle}>
            <IxInput type="number" label="Anzahl Parkplätze" />
          </div>
        </section>

        {/* Addons */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Addons</h2>
          <div style={gridStyle}>
            <IxToggle label="Hofladen vorhanden" />
            <IxInput label="Hofladen Öffnungszeiten" placeholder="z. B. Mo–Fr 08:00–18:00" />
          </div>
        </section>

        <div style={actionsStyle}>
          <IxButton>Speichern</IxButton>
        </div>
      </IxContent>
    </IxApplication>
  )
}
