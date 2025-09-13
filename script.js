const twoDec = n => (Number.isFinite(+n) ? Number(n).toFixed(2) : n);

function makeNumberInput({ id, label, value = 0, min = 0, step = 0.01, readonly = false }) {
  const wrap = document.createElement('div');
  wrap.className = 'field';

  const lab = document.createElement('label');
  lab.className = 'label';
  lab.htmlFor = id;
  lab.textContent = label;

  const inp = document.createElement('input');
  inp.className = 'input';
  inp.type = 'number';
  inp.inputMode = 'decimal';
  inp.step = step;
  inp.min = min;
  inp.id = id;
  inp.value = twoDec(value);
  if (readonly) inp.readOnly = true;

  const fmt = () => { if (inp.value !== '') inp.value = twoDec(inp.value); };
  inp.addEventListener('blur', fmt);
  inp.addEventListener('change', fmt);

  wrap.appendChild(lab);
  wrap.appendChild(inp);
  return wrap;
}

const editable = [
  { id: 'conv_length_m', label: 'Conveyor Length in meter', value: 172 },
  { id: 'conv_width_m',  label: 'Conveyor Width in meter', value: 0.8 },
  { id: 'conv_no_belt',  label: 'Conveyor No of Belt',     value: 2 }
];

const advanced = [
  { id: 'nozzle_spacing_m',   label: 'The spacing between two spray nozzles shall not exceed 3 m, as per IS:15325-2020 clause 8.7.4.1', value: 3 },
  { id: 'nozzles_per_location', label: 'No of spray nozzles shall consdridited at one location', value: 2 },
  { id: 'system_pressure_bar', label: 'The system pressure shall be 1.4 to 3.5 bar as per IS:15325 clause 8.7.3. For better penetration, 2.1 bar pressure shall be considered at the hydraulically remotest point.', value: 2.10 },
  { id: 'lhs_runs',            label: 'No of Linear Heat Sensing Cable is considered for the conveyor, recommended on three sides: top, left, and right.', value: 3 },
  { id: 'lhs_qty_m',          label: 'Approx. quantity in meters of LHS Cable from conveyor to deluge valve control panel', value: 18, readonly: false },
  { id: 'dv_to_main_m',       label: 'Distance from deluge valve to main hydrant line in meters', value: 18 }
];

const editableHost = document.getElementById('editableInputs');
const advancedHost = document.getElementById('advancedInputs');

editable.forEach(cfg => editableHost.appendChild(makeNumberInput(cfg)));
advanced.forEach(cfg => advancedHost.appendChild(makeNumberInput(cfg)));

window.MVWSInputs = {
  get(id){ const el = document.getElementById(id); return el ? parseFloat(el.value) : undefined; },
  set(id,v){ const el = document.getElementById(id); if(el){ el.value = twoDec(v); el.dispatchEvent(new Event('change')); } }
};
