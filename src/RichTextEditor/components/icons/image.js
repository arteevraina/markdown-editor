import React from 'react';

import { MOD } from '../../utilities/tooltipHelpers'

const icon = () => (
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M16.333326,0 L2.5833315,0 L2.58333143,0 C1.6628568,0 0.916665427,0.746192202 0.916665427,1.666666 C0.916665427,1.666666 0.916665427,1.666666 0.916665427,1.666666 L0.916665427,15.4166605 L0.916665427,15.4166608 C0.916665427,16.3371354 1.66285763,17.0833268 2.58333143,17.0833268 L16.3333259,17.0833268 L16.3333259,17.0833268 C17.2538005,17.0833268 17.9999919,16.3371354 17.9999919,15.4166608 L17.9999919,1.66666625 L17.9999919,1.66666625 C17.9999919,0.74619162 17.2537997,0 16.3333259,0 L16.333326,0 Z M6.05583011,10.3608292 L6.05583007,10.3608293 C6.26131332,9.94901026 6.76173479,9.781742 7.17355463,9.98722441 C7.30359957,10.052112 7.41441286,10.1498818 7.49499616,10.2708293 L8.18666255,11.3091622 L8.18666254,11.3091622 C8.25071002,11.4047472 8.3801183,11.4303138 8.47570326,11.3662665 C8.50400616,11.347302 8.52722624,11.3216857 8.54332898,11.2916622 L10.5741615,7.51916371 L10.5741614,7.51916382 C10.7209472,7.23863144 11.0170554,7.06863734 11.3333278,7.08333067 L11.3333278,7.08333067 C11.6479819,7.09179583 11.9310168,7.27683226 12.0649942,7.56166381 L15.0466597,13.8949946 L15.0466597,13.8949946 C15.1446905,14.1031879 15.0553858,14.351432 14.8471923,14.4494627 C14.7915086,14.4756822 14.7307073,14.4892398 14.6691599,14.4891616 L4.66666386,14.4891616 L4.66666387,14.4891616 C4.43654563,14.4891616 4.25001153,14.3025996 4.25001153,14.0724806 C4.25001153,14.0076761 4.26513178,13.9437656 4.29416418,13.8858281 L6.05583011,10.3608292 Z M4.45833075,5.20583125 L4.45833075,5.2058315 C4.45833075,4.28535687 5.20452212,3.5391655 6.12499675,3.5391655 C7.04547138,3.5391655 7.79166275,4.28535687 7.79166275,5.2058315 C7.79166275,6.12630613 7.04547138,6.8724975 6.12499675,6.8724975 L6.12499682,6.8724975 C5.20452219,6.8724975 4.45833075,6.12630613 4.45833075,5.2058315 C4.45833075,5.20583142 4.45833075,5.20583134 4.45833075,5.20583125 L4.45833075,5.20583125 Z" id="Shape" fill="#949CA2" fill-rule="nonzero"></path>
    </g>
  );

const image = {
  type: 'image',
  label: `Insert Image (${MOD()}+Shift+G)`,
  height: '18px',
  width: '18px',
  viewBox: '0 0 18 18',
  icon,
};

export default image;
