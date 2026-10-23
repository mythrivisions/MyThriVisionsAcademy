# MyThri Visions Academy — GitHub Pages Website

## Publish
1. Create a **Public** GitHub repository named `MyThri-Visions-Academy`.
2. Upload all files and folders in this ZIP to the repository root. `index.html` must be at the root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then click **Save**.
6. Wait for the live URL to appear in Settings → Pages.

## Pages
Home, About Us, Courses, Practice, Achievements, Gallery, Contact, Student Registration and a demo Admin Dashboard (`admin.html`).

## Admin Dashboard demo
Open `admin.html` after publishing to try adding, editing, searching and deleting sample student records, entering test marks, and exporting CSV. This dashboard stores data only in the current browser using localStorage. It has **no secure authentication** and data does not sync across devices. Do not store real student details or marks here. A real student management system requires a secure backend, database, and authenticated admin access.

## Important
The registration demo opens WhatsApp with the form details; the visitor reviews and sends the message. It does not store registration data. GitHub Pages is static hosting only. Secure student login, admin dashboard, database storage, marks uploads and protected student records require a separate backend/database such as Firebase or Supabase.

Edit page text in HTML files, shared styling in `css/style.css`, and navigation/registration behaviour in `js/script.js`. Add academy photos to `images/` and replace the sample gallery tiles. Obtain permission before publishing student photos or results.


## Student Progress (Demo)
- `student-progress.html` reads student marks saved by `admin.html` in the same browser's local storage.
- It is a demo only: no secure login, central database, or cross-device sync. Do not enter real student personal data.
- For real student access, connect a secure backend with authentication and access controls.


## Navigation update
- Public pages now use grouped dropdown navigation: Courses, Exams & Practice, and Student Zone.
- Admin Dashboard and Student Progress use a portal-style sidebar that collapses on mobile.
- The portal remains a front-end demo using browser local storage. It is not a secure login or shared database.
