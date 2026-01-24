## [1.0.0] – 2026-01-24

*We confirm that starting now our webapp is available for everyone as a major version.* Currenctly, we are available at [https://bharaden.onrender.com](https://bharaden.onrender.com) and [https://bharaden.vercel.app](https://bharaden.vercel.app). Render can be used the vercel is just hitting out of service or high-demand.

### New

- Introduced `home.helper.js` to avoid long junk js file for button handlers.
- Added sanitise models in `models.py` to avoid xss for future db related stuffs.
- Payable and Grand Total Can not be modified from now on.

### Fixed

- Removed inline `onclick` handlers causing `ReferenceError`
- Migrated dynamic utility/service buttons to DOM-loaded event listeners
- Fixed undefined function errors in `home.js`
- Fixed an issue where Total Payable was returning blank where it should not

### Improved

- Centralized all form JS under `DOMContentLoaded`
- Static files are served via `static` instead of `bundle/src`, for Templates, it is `templates` instead of `bundle/public`
- Improved maintainability by separating HTML and JS concerns
- Updated some UI related bug where texts are not being seen in light mode.

### Next

- Webpage and Receipt in Bangla
- Auto PDF Download feature

## [0.0.1] - 2026-01-21

- Initial Version
