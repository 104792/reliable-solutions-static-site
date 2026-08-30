# Reliable Solutions NC — Static HTML Website

This package contains a standalone HTML/CSS/JavaScript copy of the current Reliable Solutions NC website, including local image assets.

## Open the website

Open `index.html` directly in a modern browser. For the most reliable local preview, run a simple static server from this folder, such as `python3 -m http.server 8080`, then visit `http://localhost:8080`.

## Included files

| Path | Purpose |
| --- | --- |
| `index.html` | Complete rendered website content and metadata |
| `assets/site.css` | Responsive website styling |
| `assets/site.js` | Mobile navigation and static form fallback |
| `assets/images/` | Local copies of website imagery and logo files |

## Form limitation

This is a server-free static export. Its forms open the visitor's configured email application with the inquiry details prepared. The production website's database persistence, server-side validation, spam throttling, and direct Resend delivery require the original server application and are not embedded in this ZIP.

## Hosting

Upload the extracted folder to any conventional static host or web server. Keep the folder structure unchanged so the relative asset paths continue to work.
