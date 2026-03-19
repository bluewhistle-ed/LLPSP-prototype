import { useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-3wwcoowb8e";

function Logo() {
  return (
    <div className="h-[64px] relative shrink-0 w-[158.713px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158.713 64.0002">
        <g id="Logo">
          <path clipRule="evenodd" d={svgPaths.p2cc40800} fill="var(--fill-0, #1850C5)" fillRule="evenodd" id="Subtract" />
          <g id="letâs">
            <path d={svgPaths.pd5fc000} fill="var(--fill-0, #1850C5)" id="Vector" />
            <path d={svgPaths.pbf57c00} fill="var(--fill-0, #1850C5)" id="Vector_2" />
            <path d={svgPaths.p1f07f100} fill="var(--fill-0, #1850C5)" id="Vector_3" />
            <path d={svgPaths.p27e9c900} fill="var(--fill-0, #1850C5)" id="Vector_4" />
            <path d={svgPaths.p20575a00} fill="var(--fill-0, #1850C5)" id="Vector_5" />
          </g>
          <g id="Legislate">
            <path d={svgPaths.p34766000} fill="var(--fill-0, #1850C5)" id="Vector_6" />
            <path d={svgPaths.p7cb800} fill="var(--fill-0, #1850C5)" id="Vector_7" />
            <path d={svgPaths.p1cacc300} fill="var(--fill-0, #1850C5)" id="Vector_8" />
            <path d={svgPaths.p6488d00} fill="var(--fill-0, #1850C5)" id="Vector_9" />
            <path d={svgPaths.p348fe80} fill="var(--fill-0, #1850C5)" id="Vector_10" />
            <path d={svgPaths.p25ad600} fill="var(--fill-0, #1850C5)" id="Vector_11" />
            <path d={svgPaths.pcca4a00} fill="var(--fill-0, #1850C5)" id="Vector_12" />
            <path d={svgPaths.pdd50280} fill="var(--fill-0, #1850C5)" id="Vector_13" />
            <path d={svgPaths.p3aa9ea00} fill="var(--fill-0, #1850C5)" id="Vector_14" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-semibold leading-[48px] relative shrink-0 text-[#041a5e] text-[length:var(--text-h1)] w-full">Welcome to Let's Legislate!</p>
      <p className="leading-[24px] relative shrink-0 text-[#4b5b8a] text-[length:var(--text-h4)] w-full">{`Let's make democracy accessible, intuitive, and engaging together. Your seat at the legislative table awaits`}</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

// Input field for Name
function EnterName() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[length:var(--text-base)] text-ellipsis whitespace-nowrap">Enter Full Name</p>
    </div>
  );
}

function ContentName() {
  return (
    <div className="bg-[var(--input-background)] relative rounded-[var(--radius)] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[var(--border)] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[12px] relative w-full">
          <EnterName />
        </div>
      </div>
    </div>
  );
}

function InputFieldName() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="leading-[16px] not-italic relative shrink-0 text-[var(--foreground)] text-[length:var(--text-base)] w-full whitespace-pre-wrap">Full Name</p>
      <ContentName />
    </div>
  );
}

function Enter() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-h-px min-w-px relative" data-name="Enter">
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[length:var(--text-base)] text-ellipsis whitespace-nowrap">Enter Email</p>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[var(--input-background)] relative rounded-[var(--radius)] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[var(--border)] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[12px] relative w-full">
          <Enter />
        </div>
      </div>
    </div>
  );
}

function InputFieldTextField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input field / Text field">
      <p className="leading-[16px] not-italic relative shrink-0 text-[var(--foreground)] text-[length:var(--text-base)] w-full whitespace-pre-wrap">Email</p>
      <Content />
    </div>
  );
}

function Enter1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-h-px min-w-px relative" data-name="Enter">
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[length:var(--text-base)] text-ellipsis whitespace-nowrap">Enter Password</p>
    </div>
  );
}

function IconsVisibilityOff() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / visibility_off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / visibility_off">
          <mask height="16" id="mask0_1_199" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.00156403" />
          </mask>
          <g mask="url(#mask0_1_199)">
            <path d="M8.79844 10.6648L7.33177 9.19814C7.55399 8.53147 7.99844 8.0148 8.66511 7.64814C9.33177 7.28147 9.99844 7.17592 10.6651 7.33147L9.19844 5.86481C9.04288 5.82036 8.88177 5.79259 8.71511 5.78147C8.54844 5.77036 8.37621 5.76481 8.19844 5.76481C7.08733 5.76481 6.15399 6.14814 5.39844 6.91481C4.64288 7.68147 4.26511 8.62036 4.26511 9.73147C4.26511 9.90925 4.27066 10.0815 4.28177 10.2481C4.29288 10.4148 4.32066 10.5759 4.36511 10.7315L2.86511 9.23147C2.33177 8.78703 1.84288 8.30925 1.39844 7.79814C0.953995 7.28703 0.553995 6.74258 0.198439 6.16481C1.08733 4.65369 2.26511 3.45369 3.73177 2.56481C5.19844 1.67592 6.77621 1.23147 8.46511 1.23147C9.08733 1.23147 9.69844 1.29814 10.2984 1.43147C10.8984 1.56481 11.4762 1.76481 12.0318 2.03147L10.3318 3.73147C10.1762 3.68703 10.015 3.65925 9.84844 3.64814C9.68177 3.63703 9.50955 3.63147 9.33177 3.63147C8.22066 3.63147 7.28733 4.01481 6.53177 4.78147C5.77621 5.54814 5.39844 6.48703 5.39844 7.59814C5.39844 7.77592 5.40399 7.94814 5.41511 8.11481C5.42621 8.28147 5.45399 8.44258 5.49844 8.59814L3.99844 7.09814C3.77621 6.87592 3.57621 6.64814 3.39844 6.41481C3.22066 6.18147 3.05399 5.94258 2.89844 5.69814C3.40955 4.87592 4.04288 4.14814 4.79844 3.51481C5.55399 2.88147 6.37621 2.38703 7.26511 2.03147L7.26511 2.03147L7.26511 2.03147L7.26511 2.03147L7.26511 2.03147L8.79844 10.6648ZM15.1984 16.3981L11.7651 12.9648C11.2095 13.2093 10.6373 13.3982 10.0484 13.5315C9.45955 13.6648 8.85955 13.7315 8.24844 13.7315C6.50955 13.7315 4.90399 13.2815 3.43177 12.3815C1.95955 11.4815 0.809328 10.2648 -0.0017581 8.73147C0.353775 8.05369 0.770663 7.42036 1.24844 6.83147C1.72621 6.24258 2.24288 5.69814 2.79844 5.19814L1.06511 3.46481C0.931773 3.33147 0.865107 3.17036 0.865107 2.98147C0.865107 2.79258 0.931773 2.63147 1.06511 2.49814C1.19844 2.36481 1.35955 2.29814 1.54844 2.29814C1.73733 2.29814 1.89844 2.36481 2.03177 2.49814L15.5651 16.0315C15.6984 16.1648 15.7651 16.3204 15.7651 16.4981C15.7651 16.6759 15.6984 16.8315 15.5651 16.9648C15.4318 17.0981 15.2762 17.1648 15.0984 17.1648C14.9206 17.1648 14.7595 17.0981 14.6151 16.9648L15.1984 16.3981ZM8.79844 10.6648L5.49844 7.36481C5.45399 7.51481 5.42621 7.67036 5.41511 7.83147C5.40399 7.99258 5.39844 8.15925 5.39844 8.33147C5.39844 9.44258 5.77621 10.3815 6.53177 11.1481C7.28733 11.9148 8.22066 12.2981 9.33177 12.2981C9.50399 12.2981 9.67066 12.2926 9.83177 12.2815C9.99288 12.2704 10.1484 12.2426 10.2984 12.1981L8.79844 10.6648ZM11.5651 9.89814C11.6984 9.65369 11.8095 9.39814 11.8984 9.13147C11.9873 8.86481 12.0318 8.58703 12.0318 8.29814C12.0318 7.18703 11.6484 6.24814 10.8818 5.48147C10.1151 4.71481 9.17066 4.33147 8.04844 4.33147C7.75955 4.33147 7.48177 4.37592 7.21511 4.46481C6.94844 4.55369 6.69288 4.66481 6.44844 4.79814L5.29844 3.64814C5.73177 3.45925 6.17066 3.31481 6.61511 3.21481C7.05955 3.11481 7.51511 3.06481 7.98177 3.06481C9.50399 3.06481 10.8651 3.54814 12.0651 4.51481C13.2651 5.48147 14.1206 6.72036 14.6318 8.23147C14.3651 8.83147 14.0484 9.40369 13.6818 9.94814C13.3151 10.4926 12.9095 10.9981 12.4651 11.4648L11.5651 9.89814Z" fill="var(--fill-0, #6E7CA8)" id="visibility_off" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[var(--input-background)] relative rounded-[var(--radius)] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[var(--border)] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[12px] relative w-full">
          <Enter1 />
          <IconsVisibilityOff />
        </div>
      </div>
    </div>
  );
}

function InputFieldTextField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input field / Text field">
      <p className="leading-[16px] not-italic relative shrink-0 text-[var(--foreground)] text-[length:var(--text-base)] w-full whitespace-pre-wrap">Password</p>
      <Content1 />
    </div>
  );
}

function CheckBoxOutlineBlank() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check_box_outline_blank">
          <mask height="20" id="mask0_1_195" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_195)">
            <path d="M4.58329 17.5C4.13885 17.5 3.75913 17.3437 3.44413 17.0312C3.12913 16.7187 2.97163 16.3403 2.97163 15.8958V4.10417C2.97163 3.65972 3.12913 3.28125 3.44413 2.96875C3.75913 2.65625 4.13885 2.5 4.58329 2.5H15.375C15.8194 2.5 16.1989 2.65625 16.5135 2.96875C16.8281 3.28125 16.9854 3.65972 16.9854 4.10417V15.8958C16.9854 16.3403 16.8281 16.7187 16.5135 17.0312C16.1989 17.3437 15.8194 17.5 15.375 17.5H4.58329ZM4.58329 16.0417H15.375C15.4444 16.0417 15.5069 16.0139 15.5625 15.9583C15.6181 15.9028 15.6458 15.8403 15.6458 15.7708V4.1875C15.6458 4.11806 15.6181 4.05556 15.5625 4C15.5069 3.94444 15.4444 3.91667 15.375 3.91667H4.58329C4.51385 3.91667 4.45135 3.94444 4.39579 4C4.34024 4.05556 4.31246 4.11806 4.31246 4.1875V15.7708C4.31246 15.8403 4.34024 15.9028 4.39579 15.9583C4.45135 16.0139 4.51385 16.0417 4.58329 16.0417Z" fill="var(--fill-0, #1850C5)" id="check_box_outline_blank_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <CheckBoxOutlineBlank />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#0a1433] text-[length:var(--text-base)] whitespace-nowrap">
        <p className="leading-[16px]">Remember me</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame2 />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[var(--accent)] text-[length:var(--text-base)] whitespace-nowrap">
        <p className="leading-[16px]">Forget Password?</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <InputFieldTextField1 />
      <Frame1 />
    </div>
  );
}

function Frame5Login() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <InputFieldTextField />
      <Frame6 />
    </div>
  );
}

function LoginButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[var(--primary)] relative rounded-[var(--radius-button)] shrink-0 w-full cursor-pointer"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative w-full">
          <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
            <p className="leading-[24px]">Login</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function LoginForm({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative rounded-[12px] shrink-0 w-full" data-name="form">
      <Frame5Login />
      <LoginButton onClick={onLogin} />
    </div>
  );
}

function LoginPanel({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start w-full max-w-[532px]" data-name="login panel">
      <Frame7 />
      <LoginForm onLogin={onLogin} />
      
      {/* Don't have an account section */}
      <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] not-italic relative shrink-0 text-[length:var(--text-base)] w-full whitespace-nowrap">
        <div className="flex flex-col justify-center relative shrink-0 text-[#3c4c7c]">
          <p className="leading-[16px]">Don't have an account?</p>
        </div>
        <button 
          onClick={onLogin}
          className="flex flex-col justify-center relative shrink-0 text-[var(--accent)] cursor-pointer hover:opacity-80 transition-opacity"
        >
          <p className="leading-[16px]">Register</p>
        </button>
      </div>
    </div>
  );
}

function LoginPage({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="bg-[var(--background)] flex items-center justify-center min-h-screen page-inset-x py-[64px]" data-name="Login page">
      <div className="flex flex-col gap-[40px] items-center w-full max-w-[532px]">
        <Logo />
        <LoginPanel onLogin={onLogin} />
      </div>
    </div>
  );
}

export default function LoginWithNavigation() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/admin/home');
  };

  return (
    <LoginPage onLogin={handleLogin} />
  );
}