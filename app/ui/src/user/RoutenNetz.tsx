export function ContentRoutenNetz() {
    return (
      <main>

<section
  style={{
    textAlign: 'center',
    padding: '4rem 1rem',
    backgroundImage: 'url("./way.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white' // optional, for contrast
  }}
>
        </section>

        {/* Section: Routenetz */}
        <section style={{ textAlign: 'center', padding: '4rem 1rem' }}>
          <h2>Routennetz</h2>
          <p>Finden Sie Ihre perfekte Reitroute im Kanton Aargau</p>
          <div style={{ margin: '2rem auto', maxWidth: 800 }}>
            <img
              src="/path-to-map.png"
              alt="Routennetzkarte"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
        </section>
  
        {/* Section: Entdecken */}
        <section style={{ textAlign: 'center', padding: '4rem 1rem' }}>
          <h3>Entdecken Sie die Schönheit des Routennetzes im Aargau</h3>
          <p>
            Erkunden Sie die Landschaften auf dem Rücken der Pferde. Unser Routennetz bietet sorgfältig ausgewählte Wege durch die Natur.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <button style={{ marginRight: '1rem' }}>Mehr erfahren</button>
            <button>Zur Karte</button>
          </div>
        </section>
  
        {/* Section: Vorschläge */}
        <section style={{ textAlign: 'center', padding: '4rem 1rem', background: '#f9f9f9' }}>
          <h3>Vorschläge</h3>
          <p>Empfohlene Routen</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <img src="/route1.jpg" alt="Route 1" style={{ width: '250px', borderRadius: '8px' }} />
            <img src="/route2.jpg" alt="Route 2" style={{ width: '250px', borderRadius: '8px' }} />
            <img src="/route3.jpg" alt="Route 3" style={{ width: '250px', borderRadius: '8px' }} />
          </div>
        </section>
  
        {/* Section: So nutzen Sie unsere interaktive Karte */}
        <section style={{ textAlign: 'center', padding: '4rem 1rem', background: '#eee' }}>
          <h4>Learn</h4>
          <h2>So nutzen Sie unsere interaktive Karte</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <div style={{ maxWidth: '250px' }}>
              <h5>Zoome Funktionen für genaue Standortwahl</h5>
              <p>Nutzen Sie das Kartenzoom-Feature, um präzise Orte zu erkunden.</p>
            </div>
            <div style={{ maxWidth: '250px' }}>
              <h5>Filteroptionen für Routenauswahl</h5>
              <p>Wählen Sie aus verschiedenen Kriterien wie Schwierigkeit und Dauer.</p>
            </div>
            <div style={{ maxWidth: '250px' }}>
              <h5>Interaktive Erlebnisse für alle Nutzergruppen</h5>
              <p>Ob Reitprofi oder Anfänger – unsere Karte bietet für jeden etwas.</p>
            </div>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <button>Zur Karte</button>
          </div>
        </section>
  
      </main>
    );
  }