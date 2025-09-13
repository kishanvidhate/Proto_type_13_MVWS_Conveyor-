const MODEL = {
  "sheet": "Calculation",
  "inputs": [
    {
      "address": "C1",
      "label": "C1",
      "default": 0.0,
      "row": 1
    },
    {
      "address": "C2",
      "label": "Editable Inputs",
      "default": 0.0,
      "row": 2
    },
    {
      "address": "C3",
      "label": "Conveyor Length in meter",
      "default": 172.0,
      "row": 3
    },
    {
      "address": "C4",
      "label": "Conveyor Width  in meter",
      "default": 0.8,
      "row": 4
    },
    {
      "address": "C5",
      "label": "Conveyor No of Belt",
      "default": 2.0,
      "row": 5
    },
    {
      "address": "C6",
      "label": "Advanced inputs (if applicable)",
      "default": 0.0,
      "row": 6
    },
    {
      "address": "C7",
      "label": "The spacing between two spray nozzles shall not exceed 3 m, as per IS:15325:2020 clause 8.7.4.1",
      "default": 3.0,
      "row": 7
    },
    {
      "address": "C8",
      "label": "No of spray nozzles shall consdridied at one location",
      "default": 2.0,
      "row": 8
    },
    {
      "address": "C9",
      "label": "The system pressure shall be 1.4 to 3.5 bar as per IS:15325 clause 8.7.3. For better penetration, 2.1 bar pressure shall be considered at the hydraulically remotest point.",
      "default": 2.1,
      "row": 9
    },
    {
      "address": "C10",
      "label": "No of Linear Heat Sensing Cable is considered for the conveyor, recommended on three sides: top, left, and right.",
      "default": 3.0,
      "row": 10
    },
    {
      "address": "C12",
      "label": "Distance from deluge valve to main hydrant line in Meter",
      "default": 18.0,
      "row": 12
    },
    {
      "address": "C13",
      "label": "Calculation Results",
      "default": 0.0,
      "row": 13
    },
    {
      "address": "C15",
      "label": "Design Density 10.2 lpm/m2 as per IS:15325 Clause No 8.7.2",
      "default": 10.2,
      "row": 15
    },
    {
      "address": "C21",
      "label": "Calculation for K-Factor Selection & Nozzle Flow",
      "default": 0.0,
      "row": 21
    },
    {
      "address": "C24",
      "label": "MVWS Nozzle Selected - Spray Angle",
      "default": 0.0,
      "row": 24
    },
    {
      "address": "C28",
      "label": " Bill of Materials (BOM)",
      "default": 0.0,
      "row": 28
    }
  ],
  "formulas": [
    {
      "address": "C11",
      "label": "Approx. quantity in meter of LHS Cable from conveyor to deluge valve control panel",
      "formula": "=18",
      "row": 11
    },
    {
      "address": "C14",
      "label": "Total Area (In sq. meter) Formula = L x W x Number of Belts",
      "formula": "=(C3*C4*C5)",
      "row": 14
    },
    {
      "address": "C16",
      "label": "Theoretical Water Requirement [L/Min]",
      "formula": "=(C14*C15)",
      "row": 16
    },
    {
      "address": "C17",
      "label": "Theoretical Water Requirement [m^3/h]",
      "formula": "=(C16*0.06)",
      "row": 17
    },
    {
      "address": "C18",
      "label": "MW Water spray nozzle quantity with 5% extra.",
      "formula": "=((C3/C7)*C8)*1.05",
      "row": 18
    },
    {
      "address": "C19",
      "label": "Total Quantity in meter of Linear Heat Sensing Cable in Meter 10% extra.",
      "formula": "=((C3*C10)+C11)*1.1",
      "row": 19
    },
    {
      "address": "C20",
      "label": "Theoretical Flow per Nozzle (L/Min):",
      "formula": "=(C16/C18)",
      "row": 20
    },
    {
      "address": "C22",
      "label": "K-Factor:",
      "formula": "=(C20)/(SQRT(C9))",
      "row": 22
    },
    {
      "address": "C23",
      "label": "MVWS Nozzle Selected - K-Factor ",
      "formula": "=IF(C22<=18,18,IF(C22<=22,22,IF(C22<=26,26,IF(C22<=30,30,IF(C22<=35,35,IF(C22<=41,41,IF(C22<=51,51,IF(C22<=64,64,IF(C22<=79,79,91)))))))))",
      "row": 23
    },
    {
      "address": "C25",
      "label": "Actual Flow Based on K-Factor (L/min) = K-Factor \u00d7 \u221a Pressure \u00d7 Number of Nozzles",
      "formula": "=(C23*(SQRT(C9)*C18))",
      "row": 25
    },
    {
      "address": "C26",
      "label": "Actual Flow Provided Based on K-Factor (m^3/h):",
      "formula": "=(C25*0.06)",
      "row": 26
    },
    {
      "address": "C27",
      "label": "Deluge Valve Selection:",
      "formula": "=IF(OR(C26>1150,C26<10.01),\"Not Found\",IF(C26>=550.01,\"200 mm\",IF(C26>=200.01,\"150 mm\",IF(C26>=100.01,\"100 mm\",IF(C26>=50.01,\"80 mm\",\"50 mm\")))))",
      "row": 27
    },
    {
      "address": "C29",
      "label": "=C27 & \" Cast Iron Deluge Valve with Wet Pilot Basic Trim Assembly\"",
      "formula": "=IF(C27<>\"\",1,\"\")",
      "row": 29
    },
    {
      "address": "C30",
      "label": "=C27 & \" M.S Pipes Heavy C Class As Per IS: 1239 \"",
      "formula": "=(C12)",
      "row": 30
    },
    {
      "address": "C31",
      "label": "=C27& \" G.I. Pipes Heavy C Class As Per IS: 1239\"",
      "formula": "=CEILING(((C3*70%)+C11)*1.1,6)",
      "row": 31
    },
    {
      "address": "C32",
      "label": "=IF(B31=\"200 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"150 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B31=\"150 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"100 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B31=\"100 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"80 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B31=\"80 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"65 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B31=\"50 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"50 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"\")))))",
      "formula": "=CEILING(((C3*30%))*1.1,6)",
      "row": 32
    },
    {
      "address": "C33",
      "label": "32 mm G.I. Pipes Heavy C Class As Per IS: 1239",
      "formula": "=CEILING(IF(OR(C8=1,C8=2),0,IF(C8=3,0.4,\"\"))*(C3/C7)*1.1,6)",
      "row": 33
    },
    {
      "address": "C34",
      "label": "25 mm G.I. Pipes Heavy C Class As Per IS: 1239",
      "formula": "=CEILING((C3/C7)*(C8*1.8)*1.1,6)",
      "row": 34
    },
    {
      "address": "C35",
      "label": "=C27 &\" Cast Iron Wafer Type Butterfly Valve\"",
      "formula": "=(C29*4)",
      "row": 35
    },
    {
      "address": "C36",
      "label": "=C27&\" MS Y Type Strainers - Body : MS as per IS1239 (I)\"",
      "formula": "=(C29*1)",
      "row": 36
    },
    {
      "address": "C37",
      "label": "Medium Velocity Water Spray Nozzle Nickel Chrome Plated Brass 1/2\" BSPT",
      "formula": "=(C18)",
      "row": 37
    },
    {
      "address": "C38",
      "label": "Digital Linear Heat Detection Cable Alarm Temperature 70\u2070C",
      "formula": "=(C19)",
      "row": 38
    },
    {
      "address": "C39",
      "label": "Deluge Valve Control Panel Outdoor with Canopy and IP65 Protection ",
      "formula": "=(C29*1)",
      "row": 39
    },
    {
      "address": "C40",
      "label": "Pressure Switch with All Accessories. Range : 2-14 kg.",
      "formula": "=(C29*2)",
      "row": 40
    },
    {
      "address": "C41",
      "label": "24 VDC Solenoid Valve, Operating Pressure: 1 - 20 Bar, 1/2\" BSPT",
      "formula": "=(C29*1)",
      "row": 41
    },
    {
      "address": "C42",
      "label": "Monitor Module, if applicable",
      "formula": "=(C29*2)",
      "row": 42
    },
    {
      "address": "C43",
      "label": "Control  Nodule, if applicable",
      "formula": "=(C29*1)",
      "row": 43
    },
    {
      "address": "C44",
      "label": "12V - 10 AMPS Battery ",
      "formula": "=(C29*2)",
      "row": 44
    },
    {
      "address": "C45",
      "label": "Cables and Accessories",
      "formula": "=(C29*1)",
      "row": 45
    },
    {
      "address": "C46",
      "label": "Other Hardware Like Nut Bolts, U Clamps Anchor Fastener, Flanges & Green Gasket Etc.",
      "formula": "=(C29*1)",
      "row": 46
    },
    {
      "address": "C47",
      "label": "MS Support Made of L Angle, C Channel, & MS Plate Etc.",
      "formula": "=((C30+C31+C32+C33+C34)/3)*3.5",
      "row": 47
    }
  ],
  "b_values": [
    {
      "address": "B1",
      "value": "",
      "row": 1
    },
    {
      "address": "B2",
      "value": "Editable Inputs",
      "row": 2
    },
    {
      "address": "B3",
      "value": "Conveyor Length in meter",
      "row": 3
    },
    {
      "address": "B4",
      "value": "Conveyor Width  in meter",
      "row": 4
    },
    {
      "address": "B5",
      "value": "Conveyor No of Belt",
      "row": 5
    },
    {
      "address": "B6",
      "value": "Advanced inputs (if applicable)",
      "row": 6
    },
    {
      "address": "B7",
      "value": "The spacing between two spray nozzles shall not exceed 3 m, as per IS:15325:2020 clause 8.7.4.1",
      "row": 7
    },
    {
      "address": "B8",
      "value": "No of spray nozzles shall consdridied at one location",
      "row": 8
    },
    {
      "address": "B9",
      "value": "The system pressure shall be 1.4 to 3.5 bar as per IS:15325 clause 8.7.3. For better penetration, 2.1 bar pressure shall be considered at the hydraulically remotest point.",
      "row": 9
    },
    {
      "address": "B10",
      "value": "No of Linear Heat Sensing Cable is considered for the conveyor, recommended on three sides: top, left, and right.",
      "row": 10
    },
    {
      "address": "B11",
      "value": "Approx. quantity in meter of LHS Cable from conveyor to deluge valve control panel",
      "row": 11
    },
    {
      "address": "B12",
      "value": "Distance from deluge valve to main hydrant line in Meter",
      "row": 12
    },
    {
      "address": "B13",
      "value": "Calculation Results",
      "row": 13
    },
    {
      "address": "B14",
      "value": "Total Area (In sq. meter) Formula = L x W x Number of Belts",
      "row": 14
    },
    {
      "address": "B15",
      "value": "Design Density 10.2 lpm/m2 as per IS:15325 Clause No 8.7.2",
      "row": 15
    },
    {
      "address": "B16",
      "value": "Theoretical Water Requirement [L/Min]",
      "row": 16
    },
    {
      "address": "B17",
      "value": "Theoretical Water Requirement [m^3/h]",
      "row": 17
    },
    {
      "address": "B18",
      "value": "MW Water spray nozzle quantity with 5% extra.",
      "row": 18
    },
    {
      "address": "B19",
      "value": "Total Quantity in meter of Linear Heat Sensing Cable in Meter 10% extra.",
      "row": 19
    },
    {
      "address": "B20",
      "value": "Theoretical Flow per Nozzle (L/Min):",
      "row": 20
    },
    {
      "address": "B21",
      "value": "Calculation for K-Factor Selection & Nozzle Flow",
      "row": 21
    },
    {
      "address": "B22",
      "value": "K-Factor:",
      "row": 22
    },
    {
      "address": "B23",
      "value": "MVWS Nozzle Selected - K-Factor ",
      "row": 23
    },
    {
      "address": "B24",
      "value": "MVWS Nozzle Selected - Spray Angle",
      "row": 24
    },
    {
      "address": "B25",
      "value": "Actual Flow Based on K-Factor (L/min) = K-Factor \u00d7 \u221a Pressure \u00d7 Number of Nozzles",
      "row": 25
    },
    {
      "address": "B26",
      "value": "Actual Flow Provided Based on K-Factor (m^3/h):",
      "row": 26
    },
    {
      "address": "B27",
      "value": "Deluge Valve Selection:",
      "row": 27
    },
    {
      "address": "B28",
      "value": " Bill of Materials (BOM)",
      "row": 28
    },
    {
      "address": "B33",
      "value": "32 mm G.I. Pipes Heavy C Class As Per IS: 1239",
      "row": 33
    },
    {
      "address": "B34",
      "value": "25 mm G.I. Pipes Heavy C Class As Per IS: 1239",
      "row": 34
    },
    {
      "address": "B37",
      "value": "Medium Velocity Water Spray Nozzle Nickel Chrome Plated Brass 1/2\" BSPT",
      "row": 37
    },
    {
      "address": "B38",
      "value": "Digital Linear Heat Detection Cable Alarm Temperature 70\u2070C",
      "row": 38
    },
    {
      "address": "B39",
      "value": "Deluge Valve Control Panel Outdoor with Canopy and IP65 Protection ",
      "row": 39
    },
    {
      "address": "B40",
      "value": "Pressure Switch with All Accessories. Range : 2-14 kg.",
      "row": 40
    },
    {
      "address": "B41",
      "value": "24 VDC Solenoid Valve, Operating Pressure: 1 - 20 Bar, 1/2\" BSPT",
      "row": 41
    },
    {
      "address": "B42",
      "value": "Monitor Module, if applicable",
      "row": 42
    },
    {
      "address": "B43",
      "value": "Control  Nodule, if applicable",
      "row": 43
    },
    {
      "address": "B44",
      "value": "12V - 10 AMPS Battery ",
      "row": 44
    },
    {
      "address": "B45",
      "value": "Cables and Accessories",
      "row": 45
    },
    {
      "address": "B46",
      "value": "Other Hardware Like Nut Bolts, U Clamps Anchor Fastener, Flanges & Green Gasket Etc.",
      "row": 46
    },
    {
      "address": "B47",
      "value": "MS Support Made of L Angle, C Channel, & MS Plate Etc.",
      "row": 47
    }
  ],
  "b_formulas": [
    {
      "address": "B29",
      "formula": "=C27 & \" Cast Iron Deluge Valve with Wet Pilot Basic Trim Assembly\"",
      "row": 29
    },
    {
      "address": "B30",
      "formula": "=C27 & \" M.S Pipes Heavy C Class As Per IS: 1239 \"",
      "row": 30
    },
    {
      "address": "B31",
      "formula": "=C27& \" G.I. Pipes Heavy C Class As Per IS: 1239\"",
      "row": 31
    },
    {
      "address": "B32",
      "formula": "=IF(B31=\"200 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"150 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B31=\"150 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"100 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B31=\"100 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"80 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B31=\"80 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"65 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B31=\"50 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"50 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"\")))))",
      "row": 32
    },
    {
      "address": "B35",
      "formula": "=C27 &\" Cast Iron Wafer Type Butterfly Valve\"",
      "row": 35
    },
    {
      "address": "B36",
      "formula": "=C27&\" MS Y Type Strainers - Body : MS as per IS1239 (I)\"",
      "row": 36
    }
  ]
};

function makeEvaluatorBoth(state) {
  const fns = {
    IF: (cond, a, b) => cond ? a : b,
    OR: (...args) => args.some(Boolean),
    EVEN: (x) => { const n = Math.ceil(Math.abs(Number(x))); const e = n % 2 === 0 ? n : n + 1; return x < 0 ? -e : e; },
    ROUNDUP: (x, d=0) => { const p = Math.pow(10, d); const xv = Number(x); return Math.sign(xv) * Math.ceil(Math.abs(xv) * p) / p; },
    SQRT: (x) => Math.sqrt(Number(x)),
    CEILING: (x, sig=1) => { const s = Number(sig) || 1; return Math.ceil(Number(x) / s) * s; },
  };
  function get(addr) { const v = state[addr]; return (v === undefined || v === null) ? 0 : v; }
  function translate(formula) {
    let f = String(formula).trim();
    if (f.startsWith('=')) f = f.slice(1);
    f = f.replace(/<>/g, '!=');
    f = f.replace(/(\d+(\.\d+)?)%/g, '($1/100)');
    f = f.replace(/\s*&\s*/g, ' + ');
    f = f.replace(/\b([A-Z]+(\d+))\b/g, (m, a) => "get('" + a + "')");
    f = f.replace(/\b(IF|OR|EVEN|ROUNDUP|SQRT|CEILING)\s*\(/g, (m, name) => "fns." + name + "(");
    f = f.replace(/(?<![<>=!])=(?![=])/g, '==');
    f = f.replace(/\^/g, '**');
    return f;
  }
  return function evalFormula(formula) {
    const compiled = translate(formula);
    try {
      const fn = new Function('state','get','fns',"return (" + compiled + ");");
      return fn(state, get, fns);
    } catch (e) {
      console.warn('Eval error', e, 'Compiled:', compiled);
      return "";
    }
  }
}


// Build initial state
const defaultState = {};
MODEL.inputs.forEach(inp => { defaultState[inp.address] = typeof inp.default === 'number' ? inp.default : (parseFloat(inp.default) || 0); });
MODEL.b_values.forEach(b => { defaultState[b.address] = (b.value==null? "": String(b.value)); });
let state = JSON.parse(JSON.stringify(defaultState));

// Markers
const BASIC_MARK = MODEL.inputs.find(i => /Editable Inputs/i.test(i.label || ''));
const ADV_MARK = MODEL.inputs.find(i => /Advanced inputs/i.test(i.label || ''));
const basicStart = BASIC_MARK ? BASIC_MARK.row : 1;
const advStart = ADV_MARK ? ADV_MARK.row : 9999;

// Regex
const RX_LHS = /Approx\.?\s*quantity\s*in\s*meter\s*of\s*LHS\s*Cable\s*from\s*conveyor\s*to\s*deluge\s*valve\s*control\s*panel/i;
const RX_DIST = /Distance\s*from\s*deluge\s*valve\s*to\s*main\s*hydrant\s*line\s*in\s*Meter/i;
const RX_DD  = /Design\s*Density\s*10\.?2\s*lpm\/?m2.*15325.*8\.7\.2/i;
const ADV_EXCLUDE = [
  /Calculation\s*Results/i,
  /Calculation\s*for\s*K-?Factor\s*Selection\s*&?\s*Nozzle\s*Flow/i,
  /MVWS\s*Nozzle\s*Selected\s*-\s*Spray\s*Angle/i,
  /Bill\s*of\s*Materials\s*\(BOM\)?/i,
];
function isExcluded(i){ return ADV_EXCLUDE.some(rx => rx.test(i.label||'')); }

const lhsInput = MODEL.inputs.find(i => RX_LHS.test(i.label||''));
const lhsFormula = MODEL.formulas.find(f => RX_LHS.test(f.label||''));

const basicInputs = MODEL.inputs.filter(i => i.row > basicStart && i.row < advStart && !RX_DD.test(i.label||'') && !isExcluded(i));
let advInputs = MODEL.inputs.filter(i => i.row > advStart && !RX_DD.test(i.label||'') && !isExcluded(i));

// Ensure LHS present in Advanced
if (lhsInput && !advInputs.some(i => i.address === lhsInput.address)) {
  advInputs = [lhsInput, ...advInputs.filter(i => i.address !== lhsInput.address)];
}

// Re-order Advanced: place LHS ABOVE the Distance row
function orderAdvanced(list) {
  const lhsIdx = list.findIndex(i => RX_LHS.test(i.label||''));
  const distIdx = list.findIndex(i => RX_DIST.test(i.label||''));
  if (lhsIdx > -1 && distIdx > -1 && lhsIdx > distIdx) {
    const lhs = list.splice(lhsIdx,1)[0];
    list.splice(distIdx,0,lhs);
  }
  return list;
}
advInputs = orderAdvanced(advInputs);

// DOM
const basicDiv = document.querySelector('#inputs-basic');
const advDiv = document.querySelector('#inputs-adv');
const resultsDiv = document.querySelector('#results');
const bomBody = document.querySelector('#bom');
const resetBtn = document.querySelector('#reset');
const pdfBtn = document.querySelector('#pdf');

function to2(x){ const n = Number(x); return Number.isFinite(n) ? n.toFixed(2) : ''; }

function buildInput(wrap, inp, opts={}) {
  const box = document.createElement('div'); box.className = 'input';
  const label = document.createElement('label'); label.textContent = inp.label || inp.address;
  const input = document.createElement('input'); input.type = 'number'; input.step = 'any';
  const disabled = !!opts.disabled;
  const raw = state[inp.address];
  input.value = disabled ? '' : to2(raw);
  if (disabled) input.setAttribute('disabled','disabled');
  input.oninput = (e)=>{
    if (disabled) return;
    const v = parseFloat(e.target.value);
    state[inp.address] = Number.isFinite(v) ? v : 0;
    run();
  };
  input.onblur = ()=>{ if (!disabled) input.value = to2(state[inp.address]); };
  box.appendChild(label); box.appendChild(input); wrap.appendChild(box);
  return input;
}

function renderInputs(st=null) {
  const current = st || state;
  basicDiv.innerHTML = ''; advDiv.innerHTML = '';
  basicInputs.forEach(inp => buildInput(basicDiv, inp));
  advInputs.forEach(inp => buildInput(advDiv, inp));
  if (!lhsInput && lhsFormula) {
    const fake = {address: lhsFormula.address, label: lhsFormula.label};
    const input = buildInput(advDiv, fake, {disabled:true});
    input.value = to2(current[fake.address]);
  }
}

function computeAll() {
  const st = {...state};
  const evalBoth = makeEvaluatorBoth(st);
  MODEL.formulas.sort((a,b)=>a.row-b.row).forEach(f => { st[f.address] = evalBoth(f.formula); });
  MODEL.b_formulas.sort((a,b)=>a.row-b.row).forEach(f => { st[f.address] = evalBoth(f.formula); });
  return st;
}

function format2(x) { if (x == null || x === '') return ''; const n = Number(x); return Number.isFinite(n) ? n.toFixed(2) : String(x); }
function formatInt(x){ if (x == null || x === '') return ''; const n = Number(x); return Number.isFinite(n) ? String(Math.round(n)) : String(x); }

function renderResults(st) {
  resultsDiv.innerHTML = '';
  const labels = Object.fromEntries(MODEL.formulas.map(f => [f.address, f.label]));
  MODEL.formulas.forEach(f => {
    if (f.row >= 29 && f.row <= 47) return;
    if (RX_LHS.test(labels[f.address] || '')) return;
    const row = document.createElement('div'); row.className = 'kv row';
    const l = document.createElement('div'); l.className = 'label'; l.textContent = labels[f.address] || f.address;
    const v = document.createElement('div'); v.textContent = format2(st[f.address]);
    row.appendChild(l); row.appendChild(v); resultsDiv.appendChild(row);
  });
  const dd = MODEL.inputs.find(i => RX_DD.test(i.label||''));
  if (dd) {
    const row = document.createElement('div'); row.className = 'kv row';
    const l = document.createElement('div'); l.className = 'label'; l.textContent = dd.label;
    const v = document.createElement('div'); v.textContent = format2(st[dd.address]);
    row.appendChild(l); row.appendChild(v); resultsDiv.appendChild(row);
  }
}

function renderBOM(st) {
  bomBody.innerHTML = '';
  let sr = 1;
  for (let r = 29; r <= 47; r++) {
    const qAddr = 'C' + r;
    const qty = st[qAddr];
    if (qty === '' || qty === null || qty === undefined) continue;
    if (typeof qty === 'number' && (Number.isNaN(qty) || qty === 0)) continue;
    const bAddr = 'B' + r;
    const desc = st[bAddr] !== undefined ? st[bAddr] : '';
    const tr = document.createElement('tr');
    const tdSr = document.createElement('td'); tdSr.textContent = String(sr++);
    const tdQty = document.createElement('td'); tdQty.textContent = formatInt(qty);
    const tdDesc = document.createElement('td'); tdDesc.textContent = String(desc);
    tr.appendChild(tdSr); tr.appendChild(tdQty); tr.appendChild(tdDesc);
    bomBody.appendChild(tr);
  }
}

function run() {
  const st = computeAll();
  renderResults(st);
  renderBOM(st);
  renderInputs(st);
}

resetBtn.onclick = ()=>{ state = JSON.parse(JSON.stringify(defaultState)); const st = computeAll(); renderResults(st); renderBOM(st); renderInputs(st); };
pdfBtn.onclick = ()=> window.print();

const st0 = computeAll();
renderResults(st0);
renderBOM(st0);
renderInputs(st0);
