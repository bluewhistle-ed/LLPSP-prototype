import { useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-hkh4t53hh4";
import { USER_AVATAR as imgEllipse1 } from '../data/assets';
import { useUser, HOME_ROUTES } from '../context/UserContext';

export type ActivePage = 'dashboard' | 'psps' | 'partners' | 'global-lists' | 'home' | 'psp-dashboard' | 'questions' | 'notices' | 'amendments' | 'sitting' | 'mentor-dashboard' | 'speaker-home' | 'speaker-psp-dashboard' | 'speaker-question-hour' | 'speaker-zero-hour' | 'speaker-legislative-business';

function Group() {
  return (
    <div className="h-[24px] relative shrink-0 w-[14.314px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3139 24">
        <g id="Group">
          <path d={svgPaths.p357ab000} fill="var(--fill-0, #1850C5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  const navigate = useNavigate();
  const { userType } = useUser();
  
  return (
    <button 
      onClick={() => navigate(HOME_ROUTES[userType])} 
      className="content-stretch flex items-center justify-center relative shrink-0 size-[32px] cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="Logo"
    >
      <Group />
    </button>
  );
}

function Nav({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[var(--radius)] shrink-0 cursor-pointer" data-name=".nav">
      <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[var(--muted-foreground)] text-[length:var(--text-label)] text-ellipsis">{label}</p>
    </button>
  );
}

function NavActive({ label }: { label: string }) {
  return (
    <div className="bg-[var(--sidebar-primary)] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[var(--radius)] shrink-0" data-name=".nav">
      <p className="font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[var(--sidebar-primary-foreground)] text-[length:var(--text-label)] text-ellipsis">{label}</p>
    </div>
  );
}

function Tabs({ activePage }: { activePage: ActivePage }) {
  const navigate = useNavigate();
  const { userType, adminRole } = useUser();
  
  // Determine if we're in student or admin mode
  const isStudentMode = activePage === 'home';
  const isPSPMode = ['psp-dashboard', 'questions', 'notices', 'amendments', 'sitting'].includes(activePage) && userType === 'student';
  const isMentorMode = userType === 'mentor';
  const isSpeakerHome = activePage === 'speaker-home';
  const isSpeakerPSPMode = ['speaker-psp-dashboard', 'speaker-question-hour', 'speaker-zero-hour', 'speaker-legislative-business'].includes(activePage) && userType === 'speaker';

  if (isStudentMode || isSpeakerHome) {
    // Student home / Speaker home — no tabs, just the logo
    return null;
  }

  if (isSpeakerPSPMode) {
    // Speaker PSP navigation — Dashboard, Question Hour, Zero Hour, Legislative Business
    return (
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Tabs">
        {activePage === 'speaker-psp-dashboard' ? (
          <NavActive label="Dashboard" />
        ) : (
          <Nav label="Dashboard" onClick={() => navigate('/speaker/psp/dashboard')} />
        )}
        
        {activePage === 'speaker-question-hour' ? (
          <NavActive label="Question Hour" />
        ) : (
          <Nav label="Question Hour" onClick={() => navigate('/speaker/psp/question-hour')} />
        )}
        
        {activePage === 'speaker-zero-hour' ? (
          <NavActive label="Zero Hour" />
        ) : (
          <Nav label="Zero Hour" onClick={() => navigate('/speaker/psp/zero-hour')} />
        )}
        
        {activePage === 'speaker-legislative-business' ? (
          <NavActive label="Legislative Business" />
        ) : (
          <Nav label="Legislative Business" onClick={() => navigate('/speaker/psp/legislative-business')} />
        )}
      </div>
    );
  }

  if (isMentorMode) {
    // Mentor navigation - Dashboard, Questions, Amendments
    return (
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Tabs">
        {activePage === 'mentor-dashboard' ? (
          <NavActive label="Dashboard" />
        ) : (
          <Nav label="Dashboard" onClick={() => navigate('/mentor/home')} />
        )}
        
        {activePage === 'questions' ? (
          <NavActive label="Questions" />
        ) : (
          <Nav label="Questions" onClick={() => navigate('/mentor/questions')} />
        )}
        
        {activePage === 'amendments' ? (
          <NavActive label="Amendments" />
        ) : (
          <Nav label="Amendments" onClick={() => navigate('/mentor/amendments')} />
        )}
      </div>
    );
  }

  if (isPSPMode) {
    // PSP navigation - show PSP-specific tabs (Home accessible via logo)
    return (
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Tabs">
        {activePage === 'psp-dashboard' ? (
          <NavActive label="Dashboard" />
        ) : (
          <Nav label="Dashboard" onClick={() => navigate('/student/psp/dashboard')} />
        )}
        
        {activePage === 'questions' ? (
          <NavActive label="Questions" />
        ) : (
          <Nav label="Questions" onClick={() => navigate('/student/psp/questions')} />
        )}
        
        {activePage === 'notices' ? (
          <NavActive label="Notices" />
        ) : (
          <Nav label="Notices" onClick={() => navigate('/student/psp/notices')} />
        )}
        
        {activePage === 'amendments' ? (
          <NavActive label="Amendments" />
        ) : (
          <Nav label="Amendments" onClick={() => navigate('/student/psp/amendments')} />
        )}
        
        {activePage === 'sitting' ? (
          <NavActive label="Sitting" />
        ) : (
          <Nav label="Sitting" onClick={() => navigate('/student/psp/sitting')} />
        )}
      </div>
    );
  }

  // Admin navigation
  const isBluewhistleAdmin = adminRole === 'bluewhistle-admin';

  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Tabs">
      {activePage === 'dashboard' ? (
        <NavActive label="Dashboard" />
      ) : (
        <Nav label="Dashboard" onClick={() => navigate('/admin/home')} />
      )}
      
      {activePage === 'psps' ? (
        <NavActive label="PSPs" />
      ) : (
        <Nav label="PSPs" onClick={() => navigate('/admin/psps')} />
      )}
      
      {isBluewhistleAdmin && (
        activePage === 'partners' ? (
          <NavActive label="Partners" />
        ) : (
          <Nav label="Partners" onClick={() => navigate('/admin/partners')} />
        )
      )}
      
      {activePage === 'global-lists' ? (
        <NavActive label="Global Lists" />
      ) : (
        <Nav label="Global Lists" onClick={() => navigate('/admin/global-lists')} />
      )}
    </div>
  );
}

function NavBar({ activePage }: { activePage: ActivePage }) {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center p-[8px] relative rounded-[12px] shadow-[0px_8px_10px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Nav bar">
      <Logo />
      <Tabs activePage={activePage} />
    </div>
  );
}

function IconsExpandMore() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / expand_more">
          <mask height="16" id="mask0_1_1001" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="0.0015626" />
          </mask>
          <g mask="url(#mask0_1_1001)">
            <path d={svgPaths.p271bc980} fill="var(--fill-0, #3C4C7C)" id="expand_more" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] whitespace-nowrap">
          <p className="leading-[14px]">Let's Legislate</p>
        </div>
        <IconsExpandMore />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function TopSideBar() {
  return (
    null
  );
}

export function SharedNavBar({ activePage }: { activePage: ActivePage }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <NavBar activePage={activePage} />
      <TopSideBar />
    </div>
  );
}