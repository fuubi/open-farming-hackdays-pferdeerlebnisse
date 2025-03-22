import React from 'react'
import {
  IxContent,
  IxContentHeader,
  IxInput,
  IxSelect,
  IxSelectItem,
  IxToggle,
  IxButton,
  IxCard,
  IxIcon,
} from '@siemens/ix-react'
import GpxMap from './GpxMap'

const sectionStyle: React.CSSProperties = {
  marginBottom: '2rem',
}

const headingStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  marginBottom: '1rem',
  color: 'var(--theme-color-primary)',
}

const MapComponent = ({ name }: { name: string }) => (
  <div style={{
    width: '100%',
    height: '150px',
    backgroundColor: '#eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#888',
    fontStyle: 'italic',
    borderRadius: '0.5rem',
    marginTop: '0.5rem'
  }}>
    
    <GpxMap gpxUrl='http://localhost:8001/gxp/test.gpx'></GpxMap>
  </div>
)

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '1rem',
  marginTop: '2rem',
}

const starStyle: React.CSSProperties = {
  display: 'flex',
  gap: '4px',
  marginBottom: '0.5rem'
}

const Stars = ({ value }: { value: number }) => {
  return (
    <div style={starStyle}>
      {[...Array(5)].map((_, i) => (
        <IxIcon
          key={i}
          name={i < value ? 'star' : 'star'}
          style={{ color: i < value ? '#ffc107' : '#ccc' }}
        />
      ))}
    </div>
  )
}

const RoutesGrid = ({ user }: { user: any }) => {
  const routes = user?.overnightStay?.routes ?? []

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
      </h2>

      <div style={gridStyle}>
        {routes.map((route: any) => (
          <IxCard key={route.id} style={{ padding: '1rem' }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{route.name}</h3>
            <Stars value={route.stars} />
            <MapComponent name={route.name} />
          </IxCard>
        ))}
      </div>
    </div>
  )
}


export const RoutenPage = ({ user }: { user: any }) => {
  console.log(user)
  return (
    <IxContent>
      <h2 style={headingStyle}>
        {user.name}'s Routen  @ {user.overnightStay.name}
      </h2>
      <RoutesGrid user={user}></RoutesGrid>
    </IxContent>
  )
}
