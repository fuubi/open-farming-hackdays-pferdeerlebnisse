import GpxMap from "@app/GpxMap";
import based from "@colombalink/based-client";
import { BackendClient } from "@ofhp/app-backend";
import { useEffect, useState } from "react";

const client = based({ url: "ws://localhost:8001", env: 'app' }, { maxCacheSize: 0 }) as BackendClient


export function ContentRoutenNetz() {
    const [stayId, setStay] = useState("os001")
    const [route, setRouten] = useState(null)

    useEffect(() => {
        console.log("s", stayId)
        // client.calls['user:getRoutes'].call({stayId}).then(d=> {
        //     const all = {
        //         segments: []
        //     } 
        //     for(const route of d.stay.routes) {
        //         for(const segment of route.segments) {
        //             all.segments.push(segment)
        //         }
        //     }
        //     setRouten(all)
        // })

        const one = [
            {
                "createdAt": 1742639870216,
                "file": "stone-1.gpx",
                "id": "r0001",
                "type": "routeSegment",
                "updatedAt": 1742640064685
            },
            {
                "target": {
                    "createdAt": 1742639870210,
                    "id": "os001",
                    "location": "2638332.313276,1261373.902711",
                    "name": "Stone Ranch",
                    "roomCount": 4,
                    "type": "overnightStay",
                    "updatedAt": 1742641546031
                },
                "createdAt": 1742639870215,
                "id": "r1001",
                "type": "routeStop",
                "updatedAt": 1742639870215
            },
            {
                "createdAt": 1742641290761,
                "file": "stone-2.gpx",
                "id": "r0002",
                "type": "routeSegment",
                "updatedAt": 1742641290761
            },
            {
                "target": {
                    "createdAt": 1742639870210,
                    "id": "os001",
                    "location": "2638332.313276,1261373.902711",
                    "name": "Stone Ranch",
                    "roomCount": 4,
                    "type": "overnightStay",
                    "updatedAt": 1742641546031
                },
                "createdAt": 1742639870215,
                "id": "r1001",
                "type": "routeStop",
                "updatedAt": 1742639870215
            },
            {
                "createdAt": 1742641546033,
                "file": "stone-3.gpx",
                "id": "r0003",
                "type": "routeSegment",
                "updatedAt": 1742641546033
            },
            {
                "target": {
                    "createdAt": 1742639870210,
                    "id": "os001",
                    "location": "2638332.313276,1261373.902711",
                    "name": "Stone Ranch",
                    "roomCount": 4,
                    "type": "overnightStay",
                    "updatedAt": 1742641546031
                },
                "createdAt": 1742639870215,
                "id": "r1001",
                "type": "routeStop",
                "updatedAt": 1742639870215
            },
            {
                "target": {
                    "createdAt": 1742639870211,
                    "id": "os002",
                    "location": "2650144.90513,1259839.399965",
                    "name": "Brogli Horsefarm Schweiz",
                    "roomCount": 3,
                    "type": "overnightStay",
                    "updatedAt": 1742648723111
                },
                "createdAt": 1742639870215,
                "id": "r1002",
                "type": "routeStop",
                "updatedAt": 1742639870215
            }
        ]

        const two = [
            {
                "target": {
                    "createdAt": 1742639870210,
                    "id": "os001",
                    "location": "2638332.313276,1261373.902711",
                    "name": "Stone Ranch",
                    "roomCount": 4,
                    "type": "overnightStay",
                    "updatedAt": 1742641546031
                },
                "createdAt": 1742639870215,
                "id": "r1001",
                "type": "routeStop",
                "updatedAt": 1742639870215
            },
            {
                "createdAt": 1742641546033,
                "file": "stone-3.gpx",
                "id": "r0003",
                "type": "routeSegment",
                "updatedAt": 1742641546033
            },
            {
                "target": {
                    "createdAt": 1742639870211,
                    "id": "os002",
                    "location": "2650144.90513,1259839.399965",
                    "name": "Brogli Horsefarm Schweiz",
                    "roomCount": 3,
                    "type": "overnightStay",
                    "updatedAt": 1742648723111
                },
                "createdAt": 1742639870215,
                "id": "r1002",
                "type": "routeStop",
                "updatedAt": 1742639870215
            }
        ]

        if (stayId === 'os001') {
            setRouten({ segments: one })
        } else {
            setRouten({ segments: two })
        }

    }, [stayId])

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

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: '2rem',
                        marginTop: '2rem',
                        maxWidth: 1000,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        flexWrap: 'wrap',
                    }}
                >
                    {/* Unterkünfte list */}
                    <div style={{ flex: '1 1 250px', textAlign: 'left' }}>
                        <h4>Unterkünfte</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>

                            {/* $id: 'os001', */}
                            <li onClick={() => setStay('os0001')}>🏠 Stone Ranch</li>
                            <li onClick={() => setStay('os0002')}>🐴 Brogli Horsefarm Schweiz</li>
                        </ul>
                    </div>

                    {/* Map container */}
                    <div style={{ flex: '1 1 600px' }}>
                        <div
                            style={{
                                width: '100%',
                                height: '400px',
                                backgroundColor: '#eee',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#888',
                                fontStyle: 'italic',
                                borderRadius: '0.5rem',
                            }}
                        >
                            {route && <GpxMap route={route} />}
                        </div>
                    </div>
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