# Overdracht naar nieuwe Mac (16 okt 2026)

1. Clone/pull deze repo (`uwontruimer-agent`) op de nieuwe Mac. Daarin zitten:
   - `.claude/agents/` → marketing-directeur, online-marketing-manager, seo-specialist, sea-specialist (direct aanroepbaar in Claude Code).
   - `uwontruimer-dashboard/docs/marketing/` → regels, Ads-playbook, index naar alle plannen en het logboek.
2. Geheugen van Claude (persoonlijke voorkeuren, lessen, projectstatus) staat in `memory-uwontruimer-2026-10-16.tgz`. Uitpakken op de nieuwe Mac in `~/.claude/projects/` (zelfde map­naam `-Users-jurrienkuijper-uwontruimer-agent` als het projectpad gelijk blijft: `/Users/jurrienkuijper/uwontruimer-agent`):
   `tar xzf memory-uwontruimer-2026-10-16.tgz -C ~/.claude/projects/`
3. Secrets staan NIET in de repo: `uwontruimer-dashboard/.env.local` (DATABASE_URL, Moneybird, WhatsApp) en `uwontruimer-site/.env.local` zelf overzetten of via `vercel env pull` (sensitive waarden blijven leeg → handmatig).
4. Chrome op de nieuwe Mac: Claude in Chrome-extensie installeren en inloggen met Google Ads-account jekuijper@gmail.com (werkprofiel), geen privé-accounts.
5. Takaros heeft een eigen spoor; de marketing-agents hier zijn alleen voor Uw Ontruimer.
