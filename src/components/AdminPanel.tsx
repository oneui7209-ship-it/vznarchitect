import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  User,
  Eye,
  EyeOff,
  LogOut,
  Trash2,
  Search,
  Calendar,
  Phone,
  Mail,
  MessageSquare,
  Building2,
  ChevronDown,
  LayoutDashboard,
} from "lucide-react";
import {
  deleteConsultationSubmission,
  getConsultationSubmissions,
  type ConsultationSubmission,
} from "../lib/supabase";

const ADMIN_SESSION_KEY = "vzn_admin_session";
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function AdminPanel() {
  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem(ADMIN_SESSION_KEY) === "true";
  });
  const [submissions, setSubmissions] = useState<ConsultationSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterService, setFilterService] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [selectedSubmission, setSelectedSubmission] =
    useState<ConsultationSubmission | null>(null);

  const load = async () => {
    setLoading(true);
    const data = await getConsultationSubmissions();
    setSubmissions(data);
    setLoading(false);
  };

  useEffect(() => {
    if (loggedIn) {
      void load();
    }
  }, [loggedIn]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const user = fd.get("username") as string;
    const pass = fd.get("password") as string;
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      localStorage.setItem(ADMIN_SESSION_KEY, "true");
      setLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(ADMIN_SESSION_KEY);
    setLoggedIn(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;
    await deleteConsultationSubmission(id);
    await load();
    setSelectedSubmission(null);
  };

  const filtered = submissions.filter((s) => {
    const matchSearch =
      !search ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.phone.includes(search) ||
      s.email.toLowerCase().includes(search.toLowerCase());
    const matchService = !filterService || s.service === filterService;
    return matchSearch && matchService;
  });

  const services = [...new Set(submissions.map((s) => s.service).filter(Boolean))];

  if (!loggedIn) return <LoginScreen onSubmit={handleLogin} error={loginError} showPass={showPass} setShowPass={setShowPass} />;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/85 backdrop-blur-xl border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard size={20} className="text-gold" />
            <h1 className="font-display text-lg sm:text-xl text-foreground">
              Admin <span className="text-gold">Dashboard</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-xs text-muted-foreground">
              Welcome, Admin
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 border border-gold/30 px-4 py-2 text-xs uppercase tracking-[0.15em] text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-300 cursor-pointer"
            >
              <LogOut size={13} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 sm:px-8 py-6 sm:py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Total Submissions"
            value={submissions.length}
            icon={<LayoutDashboard size={18} />}
          />
          <StatCard
            label="This Week"
            value={
              submissions.filter(
                (s) =>
                  Date.now() - new Date(s.submittedAt).getTime() <
                  7 * 24 * 60 * 60 * 1000
              ).length
            }
            icon={<Calendar size={18} />}
          />
          <StatCard
            label="Services Requested"
            value={services.length}
            icon={<Building2 size={18} />}
          />
          <StatCard
            label="Today"
            value={
              submissions.filter(
                (s) =>
                  new Date(s.submittedAt).toDateString() ===
                  new Date().toDateString()
              ).length
            }
            icon={<Mail size={18} />}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search by name, phone or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-surface border border-gold/20 pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>
          <div className="relative">
            <select
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              className="bg-surface border border-gold/20 px-4 py-2.5 pr-10 text-sm text-foreground focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer w-full sm:w-52"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a0a0a0' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
              }}
            >
              <option value="">All Services</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block border border-gold/15 bg-surface overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold/15 bg-muted">
                <th className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
                  #
                </th>
                <th className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
                  Name
                </th>
                <th className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
                  Contact
                </th>
                <th className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
                  Service
                </th>
                <th className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
                  Date
                </th>
                <th className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-sm text-muted-foreground">
                    Loading submissions...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-sm text-muted-foreground">
                    No submissions found.
                  </td>
                </tr>
              ) : (
                filtered.map((s, i) => (
                  <tr
                    key={s.id}
                    className="border-b border-gold/10 hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => setSelectedSubmission(s)}
                  >
                    <td className="px-5 py-4 text-xs text-muted-foreground">
                      {i + 1}
                    </td>
                    <td className="px-5 py-4 text-sm text-foreground font-medium">
                      {s.name}
                    </td>
                    <td className="px-5 py-4 text-xs text-muted-foreground">
                      {s.phone}
                      <br />
                      {s.email}
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-block bg-gold/10 text-gold text-[10px] uppercase tracking-wider px-2.5 py-1 border border-gold/20">
                        {s.service}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs text-muted-foreground whitespace-nowrap">
                      {formatDate(s.submittedAt)}
                    </td>
                    <td className="px-5 py-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(s.id);
                        }}
                        className="text-muted-foreground hover:text-red-400 transition-colors cursor-pointer"
                        aria-label="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-3">
          {loading ? (
            <div className="text-center py-12 text-sm text-muted-foreground">
              Loading submissions...
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12 text-sm text-muted-foreground">
              No submissions found.
            </div>
          ) : (
            filtered.map((s, i) => (
              <div
                key={s.id}
                onClick={() => setSelectedSubmission(s)}
                className="bg-surface border border-gold/15 p-4 hover:border-gold/40 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-muted-foreground">#{i + 1}</span>
                    <h3 className="text-sm font-medium text-foreground">
                      {s.name}
                    </h3>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(s.id);
                    }}
                    className="text-muted-foreground hover:text-red-400 transition-colors cursor-pointer"
                    aria-label="Delete"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone size={11} className="text-gold" />
                    {s.phone}
                  </div>
                  {s.email && (
                    <div className="flex items-center gap-2">
                      <Mail size={11} className="text-gold" />
                      {s.email}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-gold/10">
                  <span className="inline-block bg-gold/10 text-gold text-[9px] uppercase tracking-wider px-2 py-0.5 border border-gold/20">
                    {s.service}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {formatDate(s.submittedAt)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedSubmission && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedSubmission(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-background border border-gold/20 shadow-2xl overflow-hidden"
            >
              <div className="h-1 w-full bg-gold-gradient" />
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-xl text-foreground">
                    Submission Details
                  </h3>
                  <button
                    onClick={() => setSelectedSubmission(null)}
                    className="text-muted-foreground hover:text-gold transition-colors cursor-pointer"
                  >
                    <ChevronDown size={20} className="rotate-180" />
                  </button>
                </div>
                <div className="space-y-4">
                  <DetailRow
                    icon={<User size={14} />}
                    label="Full Name"
                    value={selectedSubmission.name}
                  />
                  <DetailRow
                    icon={<Phone size={14} />}
                    label="Phone"
                    value={selectedSubmission.phone}
                  />
                  {selectedSubmission.email && (
                    <DetailRow
                      icon={<Mail size={14} />}
                      label="Email"
                      value={selectedSubmission.email}
                    />
                  )}
                  <DetailRow
                    icon={<Building2 size={14} />}
                    label="Service"
                    value={selectedSubmission.service}
                  />
                  {selectedSubmission.message && (
                    <DetailRow
                      icon={<MessageSquare size={14} />}
                      label="Message"
                      value={selectedSubmission.message}
                    />
                  )}
                  <DetailRow
                    icon={<Calendar size={14} />}
                    label="Submitted"
                    value={formatDate(selectedSubmission.submittedAt)}
                  />
                </div>
                <button
                  onClick={() => handleDelete(selectedSubmission.id)}
                  className="mt-6 w-full flex items-center justify-center gap-2 border border-red-500/30 text-red-400 px-4 py-2.5 text-xs uppercase tracking-[0.15em] hover:bg-red-500/10 transition-colors cursor-pointer"
                >
                  <Trash2 size={13} />
                  Delete Submission
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Sub-components ── */

function LoginScreen({
  onSubmit,
  error,
  showPass,
  setShowPass,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string;
  showPass: boolean;
  setShowPass: (v: boolean) => void;
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 border border-gold/40 rounded-sm grid place-items-center text-gold">
            <Lock size={24} strokeWidth={1.3} />
          </div>
          <h1 className="font-display text-2xl text-foreground">
            Admin <span className="text-gold">Portal</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-2">
            Sign in to manage consultation submissions
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="bg-surface border border-gold/15 p-6 sm:p-8 space-y-5"
        >
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
              Username
            </label>
            <div className="relative">
              <User
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                name="username"
                type="text"
                placeholder="Enter username"
                required
                className="w-full bg-background border border-gold/20 pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="Enter password"
                required
                className="w-full bg-background border border-gold/20 pl-10 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gold transition-colors cursor-pointer"
              >
                {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-xs text-red-400 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-gold-gradient px-6 py-3 text-xs uppercase tracking-[0.2em] text-gold-foreground font-medium hover:gold-glow transition-all duration-500 cursor-pointer"
          >
            Sign In
          </button>

          <p className="text-[10px] text-muted-foreground/50 text-center">
            Default: admin / admin123
          </p>
        </form>
      </motion.div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-surface border border-gold/15 p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-2 text-gold">{icon}</div>
      <div className="font-display text-2xl sm:text-3xl text-foreground">
        {value}
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0 w-8 h-8 border border-gold/30 grid place-items-center text-gold">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-0.5">
          {label}
        </div>
        <div className="text-sm text-foreground break-words">{value}</div>
      </div>
    </div>
  );
}
