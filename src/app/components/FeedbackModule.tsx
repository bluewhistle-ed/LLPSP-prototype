import { StatusChip } from "./StatusChip";
import { CompactActionButton } from "./CompactActionButton";

// ── Icons ──────────────────────────────────────────────────────────────────────

function IconReply() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_reply_fm" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_reply_fm)">
          <path d="M6.66667 11.3333V8.66667H12.6667V7.33333H6.66667V4.66667L2.66667 8L6.66667 11.3333Z" fill="currentColor"/>
        </g>
      </svg>
    </div>
  );
}

function IconGiveFeedback() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M14 1H2C1.45 1 1 1.45 1 2V11C1 11.55 1.45 12 2 12H5L8 15L11 12H14C14.55 12 15 11.55 15 11V2C15 1.45 14.55 1 14 1ZM14 11H10.83L8 13.83L5.17 11H2V2H14V11ZM4 5H12V6.5H4V5ZM4 7.5H9V9H4V7.5Z" fill="currentColor"/>
      </svg>
    </div>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────────

/** Avatar tag with name and optional role badge */
export function AuthorTag({ 
  name, 
  avatar, 
  role,
  timestamp 
}: { 
  name: string; 
  avatar: string; 
  role?: string;
  timestamp?: string;
}) {
  return (
    <div className="content-stretch flex items-center justify-between w-full">
      <div className="bg-[var(--input-background)] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[var(--radius)] shrink-0">
        <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[16px]">
            <img alt="" className="block max-w-none size-full rounded-full" src={avatar} />
          </div>
          <p className="leading-[16px] overflow-hidden text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)] text-ellipsis whitespace-nowrap">{name}</p>
        </div>
        {role && <StatusChip label={role} />}
      </div>
      {timestamp && (
        <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">{timestamp}</p>
      )}
    </div>
  );
}

/** Styled container for feedback sections */
function FeedbackContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[var(--input-background)] content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[var(--radius)] w-full">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
      {children}
    </div>
  );
}

// ── FeedbackDisplay ────────────────────────────────────────────────────────────

export interface FeedbackData {
  id?: string;
  text: string;
  authorName: string;
  authorAvatar: string;
  authorRole?: string;
  timestamp?: string;
}

interface FeedbackDisplayProps {
  feedback: FeedbackData;
  /** Show "Feedback" heading above the text */
  showHeading?: boolean;
  /** Enable reply functionality */
  allowReply?: boolean;
  /** Avatar for the replying user */
  replyAvatar?: string;
  /** Name for the replying user */
  replyName?: string;
}

export function FeedbackDisplay({ 
  feedback, 
  showHeading = false, 
  allowReply = false,
  replyAvatar,
  replyName = "You",
}: FeedbackDisplayProps) {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState<string[]>([]);

  const handleSubmitReply = () => {
    if (replyText.trim()) {
      setReplies([...replies, replyText]);
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  const handleCancelReply = () => {
    setReplyText("");
    setShowReplyInput(false);
  };

  return (
    <FeedbackContainer>
      {/* Feedback text */}
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
        {showHeading && (
          <p className="font-semibold leading-[16px] text-[var(--foreground)] text-[length:var(--text-label)]">Feedback</p>
        )}
        <p className="leading-[20px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">{feedback.text}</p>
      </div>

      {/* Author tag + optional reply button */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <AuthorTag 
          name={feedback.authorName} 
          avatar={feedback.authorAvatar} 
          role={feedback.authorRole}
          timestamp={feedback.timestamp}
        />
        {allowReply && (
          <button 
            className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer text-[var(--accent)]"
            onClick={() => setShowReplyInput(!showReplyInput)}
          >
            <IconReply />
            <p className="leading-[16px] text-[var(--accent)] text-[length:var(--text-base)] whitespace-nowrap">Reply</p>
          </button>
        )}
      </div>

      {/* Reply input */}
      {allowReply && (
        <AnimatePresence>
          {showReplyInput && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full overflow-hidden"
            >
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type your reply..."
                className="relative w-full bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-button-small)] p-[8px] leading-[20px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)] min-h-[80px] resize-none focus:outline-none cursor-text"
              />
              <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
                <CompactActionButton
                  label="Cancel"
                  variant="secondary"
                  onClick={handleCancelReply}
                />
                <CompactActionButton
                  label="Submit"
                  variant="primary"
                  onClick={handleSubmitReply}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Submitted replies */}
      {replies.length > 0 && (
        <>
          <div className="border-t border-[#e3e6f0] w-full" />
          {replies.map((reply, index) => (
            <div key={index} className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <p className="leading-[20px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">{reply}</p>
              <div className="bg-[var(--input-background)] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[var(--radius)] shrink-0">
                <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  {replyAvatar && (
                    <div className="relative shrink-0 size-[16px]">
                      <img alt="" className="block max-w-none size-full rounded-full" src={replyAvatar} />
                    </div>
                  )}
                  <p className="leading-[16px] overflow-hidden text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)] text-ellipsis whitespace-nowrap">{replyName}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </FeedbackContainer>
  );
}

// ── FeedbackForm ───────────────────────────────────────────────────────────────

interface FeedbackFormProps {
  onSubmit: (text: string) => void;
  onCancel: () => void;
  placeholder?: string;
  submitLabel?: string;
}

export function FeedbackForm({ 
  onSubmit, 
  onCancel, 
  placeholder = "Write your feedback...",
  submitLabel = "Submit Feedback",
}: FeedbackFormProps) {
  const [text, setText] = useState("");
  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textRef.current?.focus();
  }, []);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.height = 'auto';
      textRef.current.style.height = textRef.current.scrollHeight + 'px';
    }
  }, [text]);

  return (
    <FeedbackContainer>
      <textarea
        ref={textRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        className="relative w-full bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-button-small)] p-[8px] leading-[20px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)] resize-none overflow-hidden focus:outline-none cursor-text"
        rows={2}
      />
      <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
        <CompactActionButton
          label="Cancel"
          variant="secondary"
          onClick={onCancel}
        />
        <CompactActionButton
          label={submitLabel}
          variant="primary"
          onClick={() => { if (text.trim()) onSubmit(text.trim()); }}
        />
      </div>
    </FeedbackContainer>
  );
}

// ── GiveFeedbackButton ─────────────────────────────────────────────────────────

interface GiveFeedbackButtonProps {
  onClick: () => void;
  label?: string;
}

export function GiveFeedbackButton({ onClick, label = "Give Feedback" }: GiveFeedbackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer group text-[var(--accent)]"
    >
      <IconGiveFeedback />
      <p className="leading-[16px] text-[var(--accent)] text-[length:var(--text-base)] group-hover:underline">{label}</p>
    </button>
  );
}

// ── MentorFeedbackSection ──────────────────────────────────────────────────────
// A complete "Give Feedback" flow: button → form → submitted display

interface MentorFeedbackSectionProps {
  mentorName: string;
  mentorAvatar: string;
  mentorRole?: string;
  placeholder?: string;
  submitLabel?: string;
}

export function MentorFeedbackSection({
  mentorName,
  mentorAvatar,
  mentorRole = "Mentor",
  placeholder = "Write your feedback...",
  submitLabel = "Submit Feedback",
}: MentorFeedbackSectionProps) {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = (text: string) => {
    setSubmitted(text);
    setShowForm(false);
  };

  if (submitted) {
    return (
      <FeedbackDisplay
        feedback={{
          text: submitted,
          authorName: "You",
          authorAvatar: mentorAvatar,
          authorRole: mentorRole,
        }}
      />
    );
  }

  return (
    <>
      {!showForm && (
        <GiveFeedbackButton onClick={() => setShowForm(true)} />
      )}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full overflow-hidden"
          >
            <FeedbackForm
              onSubmit={handleSubmit}
              onCancel={() => setShowForm(false)}
              placeholder={placeholder}
              submitLabel={submitLabel}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}