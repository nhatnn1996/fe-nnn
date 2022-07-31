const Folder = (props) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 468.293 468.293"
    style="enable-background:new 0 0 468.293 468.293;"
  >
    <path
      style="fill:#F6C358;"
      d="M29.525,50.447h111.996c7.335,0,14.11,3.918,17.77,10.274l18.433,25.181
	c3.66,6.356,10.436,10.274,17.77,10.274h272.798v287.495c0,15.099-12.241,27.34-27.34,27.34H27.34
	C12.241,411.011,0,398.77,0,383.671V128.068c0-21.133,3.265-42.14,9.68-62.276l0,0C12.03,56.755,20.188,50.447,29.525,50.447z"
    />
    <rect
      x="42.615"
      y="91.473"
      style="fill:#EBF0F3;"
      width="359.961"
      height="152.058"
    />
    <path
      style="fill:#FCD462;"
      d="M447.788,64.117H334.927c-8.026,0-15.315,4.683-18.65,11.983l-19.313,42.267
	c-3.336,7.3-10.624,11.983-18.65,11.983H0v260.155c0,15.099,12.241,27.34,27.34,27.34h413.613c15.099,0,27.34-12.241,27.34-27.34
	V84.622C468.293,73.298,459.112,64.117,447.788,64.117z"
    />
  </svg>
);

export default Folder;

export const TempIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fit=""
      height="100%"
      width="100%"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  );
};
