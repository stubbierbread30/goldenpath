// Define bounds to restrict panning
const bounds = L.latLngBounds(
  [13.6285, 123.1825],
  [13.6325, 123.1875]
);

// Initialize map
const map = L.map('map', {
  center: [13.6304, 123.1851],
  zoom: 20,
  minZoom: 17,
  maxBounds: bounds,
  maxBoundsViscosity: 0.7
});

// Load tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Building database
const buildings = {
  "Xavier Hall": {
      coords: [13.629819066439957, 123.18502429319508],
      room: "XH-101",
      facilities: "Office of Student Affairs, Student Government, University Press, Xavier Dorm"
    },
    "Francis Burns Building": {
      coords: [13.630994155682417, 123.18485821078966],
      room: "BH-202",
      facilities: "University Health Services Center, Center for Community Development, CBA Dean’s Office, CBA Chairpersons’ Office"
    },

    "Phelan Hall": {
      coords: [13.630060, 123.183930],
      room: "P111 - P119, P211 -P219, P311 - P319",
      facilities: "CCS Dean’s Office, CS Chairpersons’ Office, Chem Lab, Physics Lab, Instructional Media Center"
    },
    "Instructional Media Center": {
      coords: [13.630060, 123.183930],
      room: "",
      facilities: "Phelan Hall"
    },
    "Phelan Restroom": {
      coords: [13.630060, 123.183930],
      room: "",
      facilities: "First Floor"
    },
    "P111": {
      coords: [13.630060, 123.183930],
      room: "",
      facilities: "Phelan Hall"
    },
    "P112": {
      coords: [13.630060, 123.183930],
      room: "",
      facilities: "Phelan Hall"
    },
    "P113": {
      coords: [13.630060, 123.183930],
      room: "",
      facilities: "Phelan Hall"
    },
    "Alingal Hall": {
      coords: [13.63175316232863, 123.1842917334199],
      room: "AH-101",   
      facilities: "Multi-purpose Hall, Events, Student Gatherings, Bio Lab"
    },
    "James O'Brien Library": {
      coords: [13.63097637857908, 123.18387330884119],
      room: "LIB-100",
      facilities: "Library, College Reading Center, Study Areas"
    },
    "Bonoan Canteen": {
      coords: [13.631239145774927, 123.18438301868481],
      room: "BC-001",
      facilities: "Dining Area, Mini Mart"
    },
    "Madrigal Building": {
      coords: [13.631110919432551, 123.18518701866489],
      room: "MB-301",
      facilities: "Entrepreneurship Classrooms, Labs"
    },
    "Christ the King Church": {
      coords: [13.630910091887767, 123.18557629262779],
      room: "CKC",
      facilities: "Main Church, Mass Services, Religious Events"
    },
    "Tennis Court": {
      coords: [13.631451773262006, 123.18471451421914],
      room: "Outdoor Area",
      facilities: "Sports Activities, Tennis Matches"
    },
    "Arrupe Hall": {
      coords: [13.63155060980826, 123.18381359161124],
      room: "AR-101",
      facilities: "Convention Hall, Retreat Center, Psychology Lab, Media Studies Lab"
    },
    "Jesuit Residence": {
      coords: [13.631287456289847, 123.18576709354147],
      room: "JR-001",
      facilities: "Jesuit Community Housing"
    },
    "Engineering Building": {
      coords: [13.629777536830636, 123.18369097799685],
      room: "ENG-201",
      facilities: "Engineering Classrooms, Labs"
    },
    "SHS Building": {
      coords: [13.629643529180667, 123.18399700429438],
      room: "SHS-101",
      facilities: "Senior High School Classrooms, Faculty Offices"
    },
    "Raul J. Bonoan Building": {
      coords: [13.631291849933287, 123.18438235331901],
      room: "BN-101",
      facilities: "Printing Center, Center for Culture and the Arts"
    },
    "Four Pillars": {
      coords: [13.630446111915056, 123.18508360173306],
      room: "FP-001",
      facilities: "Historical Monument and Landmark"
    },
    "Covered Courts": {
      coords: [13.632186807112248, 123.18496646440396],
      room: "CC-001",
      facilities: "Sports Events, PE Classes, Assemblies"
    },
    "Dolan Hall": {
      coords: [13.630146953424392, 123.18362931794948],
      room: "DL-101",
      facilities: "CSE Dean’s Office, CSE Chairpersons’ Offices, Hydraulics Lab"
    },
    "Santos Hall": {
      coords: [13.630141690512724, 123.18462775334835],
      room: "SA-101",
      facilities: "University Registrar’s Office, Admissions, Campus Ministry Office, Nursing Amphitheater"
    },
    "Admininistration Building": {
      coords: [13.630474611388111, 123.18498849231864],
      room: "ADM-001",
      facilities: "President’s Office, Office of the VPHE, Office of Mission and Identity, College Graduation Center, Institutional Testing Office, Treasurer's Office, Amdministrative Services Office, University Student Recruitment Office, Center for Psychological Services"
    },
    "HE Building": {
      coords: [13.629607611728183, 123.18454625493767],
      room: "HE-101",
      facilities: "Home Economics Classrooms, Demonstration Rooms"
    },
    "IGP Cafe": {
      coords: [13.631354483155343, 123.18460618079811],
      room: "IGP-001",
      facilities: "Student Cafe, Refreshments"
    },
    "Faber Center": {
      coords: [13.631032635799256, 123.18586099977522],
      room: "FB-001",
      facilities: "Jesuit Spirituality and Guidance Center"
    },
    "Eco Garden": {
      coords: [13.629830072993316, 123.18441457491907],
      room: "ECO-001",
      facilities: "Environmental Education Area"
    },
    "Ignatius Park": {
      coords: [13.63071074573112, 123.18443295666371],
      room: "",
      facilities: "Park"
    },
    "Infirmary": {
      coords: [13.63089026211956, 123.18509456410952],
      room: "",
      facilities: "Infirmary Room"
    },
    "Physical Plant Administration": {
      coords: [13.629913639055015, 123.1831463059294],
      room: "",
      facilities: "Physical Plant Admin"
    },
    "Guard House 2": {
      coords: [13.629752957599575, 123.18339739747378],
      room: "",
      facilities: "Physical Plant Admin"
    },
    "Adriatico Building": {
      coords: [13.63058180664425, 123.18379502138951],
      room: "",
      facilities: "Physical Plant Admin"
    },
    "Entrepreneur Building": {
      coords: [13.631372196526305, 123.18490662462321],
      room: "",
      facilities: "Business Incubation, Startup Support, Innovation Hub"
    },
    "Richie Fernando Hall": {
      coords: [13.631303236898951, 123.18410729406183],
      room: "",
      facilities: "Business Incubation, Startup Support, Innovation Hub"
    },
    "University Gymnasium": {
      coords: [13.629506456229256, 123.18492925660223],
      room: "Main Court",
      facilities: "University Chair and Band Office"
    },
    "Ateneo Avenue": {
      coords: [13.630303350482437, 123.18543196856642],
      room: "",
      facilities: "Avenue"
    },
    "Guard House 3": {
      coords: [13.632693, 123.184442],
      room: "",
      facilities: "Guard House"
    },
    "Main Gate": {
      coords: [13.630220, 123.185564],
      room: "",
      facilities: "Guard House"
    },
    "Phelan Bldg.": {
      coords: [13.630060, 123.183930],
      room: "P219, p219, dcs, DCS, dcs office, DCS office",
      facilities: "P219 DCS Office"
    },
    "Santos Bldg.": {
      coords: [13.630141690512724, 123.18462775334835],
      room: "S218, s218, MIS, mis, Management Information System, management information system",
      facilities: "S218 MIS Office"
    },
  
    "Parking 1": {
      coords: [13.631299, 123.185170],
      coords: [13.630855, 123.185290],
      room: "Parking, parking",
      facilities: "Parking near University Church"
    },
    "Parking 2": {
      coords: [13.631299, 123.185170],
      room: "",
      facilities: "Parking near covered courts"
    },
    "Parking 3": {
      coords: [13.631583, 123.184763],
      room: "",
      facilities: "Parking near Belardo Hall"
    },
    "Parking 4": {
      coords: [13.63175316232863, 123.1842917334199],
      room: "",
      facilities: "Parking near Alingal Hall"
    },
    "Parking 5": {
      coords: [13.629959, 123.184149],
      room: "",
      facilities: "Parking near Phelan Hall"
    },
};



fetch('sidewalks.geojson')
  .then(res => res.json())
  .then(data => {
    const sidewalkLayer = L.geoJSON(data, {
      style: {
        color: '#ff4d4d',
        weight: 4
      }
    }).addTo(map);

    const start = turf.point([123.202345, 13.621234]); // Example start [lng, lat]
    const end = turf.point([123.203456, 13.622345]);   // Example end [lng, lat]

    // Get all sidewalk line segments from GeoJSON
    const lines = data.features.filter(f => f.geometry.type === 'LineString');

    // Find the nearest point on the sidewalk to start and end
    let nearestStartLine = null;
    let nearestEndLine = null;
    let minStartDist = Infinity;
    let minEndDist = Infinity;

    lines.forEach(line => {
      const snappedStart = turf.nearestPointOnLine(line, start);
      const snappedEnd = turf.nearestPointOnLine(line, end);
      const distStart = turf.distance(start, snappedStart);
      const distEnd = turf.distance(end, snappedEnd);

      if (distStart < minStartDist) {
        minStartDist = distStart;
        nearestStartLine = line;
      }

      if (distEnd < minEndDist) {
        minEndDist = distEnd;
        nearestEndLine = line;
      }
    });

    // Combine snapped segments for display
    const snappedStartPoint = turf.nearestPointOnLine(nearestStartLine, start);
    const snappedEndPoint = turf.nearestPointOnLine(nearestEndLine, end);

    const route = turf.lineString([
      snappedStartPoint.geometry.coordinates,
      snappedEndPoint.geometry.coordinates
    ]);

    L.geoJSON(route, {
      style: {
        color: 'blue',
        weight: 4,
        dashArray: '5, 5'
      }
    }).addTo(map);

    L.marker([start.geometry.coordinates[1], start.geometry.coordinates[0]])
      .addTo(map)
      .bindPopup('Start');
    L.marker([end.geometry.coordinates[1], end.geometry.coordinates[0]])
      .addTo(map)
      .bindPopup('Destination');
  });

let currentLocation = null;
let activeMarker = null;
let routeLine = null;

function estimateTime(fromCoords, toCoords) {
  const distance = map.distance(fromCoords, toCoords);
  const walkingSpeed = 80; // 80 meters per minute
  const mins = Math.ceil(distance / walkingSpeed);
  return `Approx. ${mins} min${mins > 1 ? "s" : ""}`;
}

function clearSidebar() {
  const infoCards = document.querySelectorAll(".sidebar .info-card .value");
  infoCards.forEach(card => {
    card.textContent = "-";
  });
}

function updateSidebar(buildingName) {
  const destination = buildings[buildingName];
  if (!destination) return;

  const fromName = currentLocation;
  const fromCoords = buildings[fromName]?.coords;

  document.querySelector(".sidebar .info-card:nth-of-type(1) .value").textContent =
    `${buildingName}, Room: ${destination.room}`;
  document.querySelector(".sidebar .info-card:nth-of-type(2) .value").textContent =
    destination.facilities;
  document.querySelector(".sidebar .info-card:nth-of-type(3) .value").textContent =
    fromName ? `You are here: ${fromName}` : "Starting point not set";
  document.querySelector(".sidebar .info-card:nth-of-type(4) .value").textContent =
    fromName === buildingName
      ? "You're already at this location"
      : `From ${fromName} to ${buildingName}`;
  document.querySelector(".sidebar .info-card:nth-of-type(5) .value").textContent =
    fromName === buildingName
      ? "0 mins"
      : estimateTime(fromCoords, destination.coords);

  currentLocation = buildingName;
}

// Call this on page load to clear sidebar
clearSidebar();

let routeControl = null;

// Search handler
function searchLocation() {
  const startQuery = document.getElementById('startInput').value.trim().toLowerCase();
  const destinationQuery = document.getElementById('searchInput').value.trim().toLowerCase();
  let foundStart = false;
  let foundDestination = false;
  let startBuilding = null;
  let destinationBuilding = null;

  if (activeMarker) map.removeLayer(activeMarker);
  if (routeControl) {
    routeControl.remove();
    routeControl = null;
  }

  // Search for start building
  for (const [name, data] of Object.entries(buildings)) {
    const buildingMatch = name.toLowerCase().includes(startQuery);
    const roomMatch = data.room.toLowerCase().includes(startQuery);
    const facilitiesMatch = data.facilities.toLowerCase().includes(startQuery);

    if (buildingMatch || roomMatch || facilitiesMatch) {
      startBuilding = name;
      foundStart = true;
      break;
    }
  }

  if (!foundStart) {
    alert("No matching start location found. Please check your input.");
    return;
  }

  // If user searched for "parking", find the nearest parking to start location
if (destinationQuery === "parking") {
  let nearestParking = null;
  let shortestDistance = Infinity;
  const startCoords = buildings[startBuilding].coords;

  for (const [name, data] of Object.entries(buildings)) {
    if (data.facilities.toLowerCase().includes("parking")) {
      const [lat1, lon1] = startCoords;
      const [lat2, lon2] = data.coords;
      const distance = Math.sqrt(Math.pow(lat1 - lat2, 2) + Math.pow(lon1 - lon2, 2));

      if (distance < shortestDistance) {
        shortestDistance = distance;
        nearestParking = name;
      }
    }
  }

  if (nearestParking) {
    destinationBuilding = nearestParking;
    foundDestination = true;
  } else {
    alert("No parking facility found.");
    return;
  }
} else {
  // General search for building name, room code, or facilities
  for (const [name, data] of Object.entries(buildings)) {
    const buildingMatch = name.toLowerCase().includes(destinationQuery);
    const roomMatch = data.room.toLowerCase().includes(destinationQuery);
    const facilitiesMatch = data.facilities.toLowerCase().includes(destinationQuery);

    if (buildingMatch || roomMatch || facilitiesMatch) {
      destinationBuilding = name;
      foundDestination = true;
      break;
    }
  }

  if (!foundDestination) {
    alert("No matching destination found. Please check your input.");
    return;
  }
}




  // Proceed with routing
  currentLocation = startBuilding; 
  updateSidebar(destinationBuilding);

  const destination = buildings[destinationBuilding];
  activeMarker = L.marker(destination.coords)
    .addTo(map)
    .bindPopup(`<strong>${destinationBuilding}</strong><br>${destination.facilities}`)
    .openPopup();

  map.setView(destination.coords, 20);

  const fromCoords = buildings[startBuilding].coords;
  const toCoords = destination.coords;
  currentLocation = startBuilding;

  function animateRoute(coords) {
    let index = 1;
    const total = coords.length;

    const animatedLine = L.polyline([coords[0]], {
      color: '#00bcd4', 
      weight: 5,
      opacity: 0.8,
      dashArray: '10, 10',
      lineJoin: 'round'
    }).addTo(map);

    function drawNext() {
      if (index < total) {
        animatedLine.setLatLngs(coords.slice(0, index + 1));
        index++;
        requestAnimationFrame(drawNext);
      }
    }

    drawNext();
  }

  routeControl = L.Routing.control({
    position: 'bottomleft',
    waypoints: [
      L.latLng(fromCoords),
      L.latLng(toCoords)
    ],
    router: L.Routing.osrmv1({
      serviceUrl: 'https://router.project-osrm.org/route/v1',
      profile: 'foot'
    }),
    routeWhileDragging: false,
    createMarker: () => null,
    showAlternatives: false,
    fitSelectedRoutes: true,
    addWaypoints: false,
    lineOptions: {
      styles: [
        {
          color: '#38bdf8',
          weight: 6,
          opacity: 0.9
        },
        {
          color: '#ffffff',
          weight: 3,
          opacity: 0.8,
          dashArray: '8, 12',
          className: 'animated-dash'
        }
      ]
    }
  }).addTo(map);
}

// Helper function to get query param from URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// On page load, check if location param is 'phelan'
const buildingParam = getQueryParam('building');
if (buildingParam && buildingParam.toLowerCase() === 'phelan') {
  const phelan = buildings["Phelan Hall"];
  if (phelan) {
    map.setView(phelan.coords, 20); // Adjust zoom as needed
    L.marker(phelan.coords)
      .addTo(map)
      .bindPopup(`<strong>Phelan Hall</strong><br>${phelan.facilities}`)
      .openPopup();
  }
}

if (buildingParam && buildingParam.toLowerCase() === 'santos') {
  const santos = buildings["Santos Hall"];
  if (santos) {
    map.setView(santos.coords, 20);
    L.marker(santos.coords)
      .addTo(map)
      .bindPopup(`<strong>Santos Hall</strong><br>${santos.facilities}`)
      .openPopup();
  }
}

if (buildingParam && buildingParam.toLowerCase() === 'p111') {
  const P111 = buildings["P111"];
  if (P111) {
    map.setView(P111.coords, 20);
    L.marker(P111.coords)
      .addTo(map)
      .bindPopup(`<strong>P111 First Floor</strong><br>${P111.facilities}`)
      .openPopup();
  }
}

if (buildingParam && buildingParam.toLowerCase() === 'p112') {
  const P112 = buildings["P112"];
  if (P112) {
    map.setView(P112.coords, 20);
    L.marker(P112.coords)
      .addTo(map)
      .bindPopup(`<strong>P112 First Floor</strong><br>${P112.facilities}`)
      .openPopup();
  }
}

if (buildingParam && buildingParam.toLowerCase() === 'p113') {
  const P113 = buildings["P113"];
  if (P113) {
    map.setView(P113.coords, 20);
    L.marker(P113.coords)
      .addTo(map)
      .bindPopup(`<strong>P113 First Floor</strong><br>${P113.facilities}`)
      .openPopup();
  }
}

if (buildingParam && buildingParam.toLowerCase() === 'instructional media center') {
  const instructional_media_center = buildings["Instructional Media Center"];
  if (instructional_media_center) {
    map.setView(instructional_media_center.coords, 20);
    L.marker(instructional_media_center.coords)
      .addTo(map)
      .bindPopup(`<strong>🖥️ Instructional Media Center</strong><br>${instructional_media_center.facilities}`)
      .openPopup();
  }
}

if (buildingParam && buildingParam.toLowerCase() === 'phelan restroom') {
  const restroom = buildings["Phelan Restroom"];
  if (restroom) {
    map.setView(restroom.coords, 20);
    L.marker(restroom.coords)
      .addTo(map)
      .bindPopup(`<strong>🚽 Phelan Restroom</strong><br>${restroom.facilities}`)
      .openPopup();
  }
}