# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Initial Setup

1. Install Node.js version 22 (see `.nvmrc` - use `nvm use` if you have NVM installed)
2. Run `npm install` to install JavaScript dependencies
3. Run `composer install` to install PHP dependencies
4. Run `npm run build` to compile assets
5. Start local environment with `wp-env start` (requires Docker)

### PHP Development

- `npm run lint:php` - Run PHP CodeSniffer linting
- `npm run lint:php:fix` - Auto-fix PHP coding standards issues
- `npm run lint:phpstan` - Run PHPStan static analysis
- `composer lint` - Alternative: Run PHP linting via Composer
- `composer format` - Alternative: Auto-fix PHP coding standards via Composer

### JavaScript Development

- `npm run build` - Build production assets (outputs to `build/`)
- `npm run start` - Start development server with hot reload
- `npm run lint:js` - Lint JavaScript files
- `npm run lint:js:fix` - Fix JavaScript linting issues
- `npm run lint:css` - Lint CSS/SCSS files
- `npm run lint:css:fix` - Fix CSS linting issues
- `npm run format` - Format code using wp-scripts formatter

### Testing

- `npm run test:unit:js` - Run JavaScript unit tests with coverage (Jest)
- `npm run test:unit:php` - Run PHP unit tests with coverage (PHPUnit, requires wp-env)
- `npm run test:e2e` - Run Playwright end-to-end tests (default: http://localhost:8889)
- `composer test` - Alternative: Run PHPUnit tests via Composer

**Running individual tests:**
- PHP: `wp-env run tests-wordpress phpunit /var/www/html/wp-content/plugins/gatherpress/test/unit/php/includes/core/classes/class-test-event.php`
- JavaScript: `npm run test:unit:js -- src/blocks/rsvp/test/edit.test.js`
- E2E: `npm run test:e2e -- test/e2e/event-setup.spec.js`

### WordPress Environment

- `npm run wp-env start` - Start local WordPress environment (accessible at http://localhost:8889)
- `npm run wp-env stop` - Stop the local WordPress environment
- `wp-env start --xdebug` - Start with Xdebug enabled for PHP debugging
- `npm run playground` - Start WordPress Playground server
- `npm run playground:mount` - Start WordPress Playground with plugin mounted
- `npm run plugin-zip` - Create distributable plugin zip

**Default wp-env credentials:**
- Username: `admin`
- Password: `password`
- Admin URL: http://localhost:8889/wp-admin

### Documentation & Linting

- `npm run lint:md:docs` - Lint markdown documentation files
- `npm run lint:md:js` - Lint markdown in JavaScript files
- `npm run lint:pkg-json` - Lint package.json format

### Utilities

- `npm run check-engines` - Check Node.js and npm version compatibility
- `npm run check-licenses` - Check package licenses
- `npm run packages-update` - Update WordPress packages
- `composer hooks` - Extract WordPress hooks to documentation

## Architecture Overview

GatherPress is a WordPress event management plugin with a block-based architecture:

### Directory Structure

```
gatherpress/
├── build/                    # Compiled assets (generated, gitignored)
├── includes/
│   └── core/
│       ├── classes/         # PHP classes (autoloaded)
│       │   ├── blocks/      # Block-specific PHP logic
│       │   └── settings/    # Settings page classes
│       └── traits/          # Reusable PHP traits (e.g., Singleton)
├── src/                     # Source files (compiled to build/)
│   ├── blocks/             # Block source files
│   ├── components/         # Shared React components
│   ├── helpers/            # JavaScript utility functions
│   ├── panels/             # Editor sidebar panels
│   └── stores/             # WordPress data stores
├── test/
│   ├── unit/
│   │   ├── php/           # PHPUnit tests
│   │   └── js/            # Jest tests
│   └── e2e/               # Playwright tests
├── docs/                   # Documentation
│   └── developer/         # Developer documentation
├── .wp-env.json           # wp-env configuration
├── phpunit.xml.dist       # PHPUnit configuration
├── jest.config.js         # Jest configuration
├── playwright.config.js   # Playwright configuration
└── webpack.config.js      # Webpack configuration
```

### Core PHP Structure

- **Namespace**: `GatherPress\Core`
- **Entry point**: `gatherpress.php` loads the plugin and initializes the `Setup` class
- **Main classes** in `includes/core/classes/`:
    - `Event` - Core event management and data handling (regular class, requires post ID)
    - `Rsvp` - RSVP functionality and attendee management (regular class, requires post ID)
    - `Venue` - Location and venue management (regular class, requires post ID)
    - `Block` - Base class for Gutenberg blocks (singleton)
    - `Assets` - Asset loading and management (singleton)
    - `Settings` - Plugin configuration management (singleton)
    - `Event_Setup` - Registers event post type and hooks (singleton)
    - `Rsvp_Setup` - RSVP functionality setup (singleton)
    - `Rsvp_Form` - Form processing and validation helper
    - `Event_Rest_API` - REST API endpoints for events
    - `Utility` - Shared helper functions
    - `Validate` - Input validation utilities

**Subnamespaces:**
- `GatherPress\Core\Blocks\*` - Block-specific classes in `includes/core/classes/blocks/`
- `GatherPress\Core\Settings\*` - Settings page classes in `includes/core/classes/settings/`

### Block Architecture

- **Block definitions** in `src/blocks/[block-name]/`:
    - `block.json` - Block registration and metadata
    - `edit.js` - Block editor interface
    - `render.php` - Server-side rendering (for dynamic blocks)
    - `style.scss` - Block styling
    - `view.js` - Frontend interactivity

### Key Blocks

- `rsvp` - Event RSVP management with templating system (dynamic, PHP-rendered)
- `rsvp-form` - Form for RSVP submission
- `rsvp-response` - Display and toggle user RSVP status
- `rsvp-template` - Template for different RSVP states
- `event-date` - Date and time display (dynamic)
- `online-event` - Online event link management (dynamic)
- `venue` - Location and map integration (dynamic, uses Leaflet)
- `add-to-calendar` - Calendar integration (.ics download)
- `events-list` - Query and display list of events
- `modal` / `modal-content` / `modal-manager` - Modal system for user interactions
- `dropdown` / `dropdown-item` - Dropdown menu components
- `form-field` - Generic form field component

### Frontend Architecture

- Uses WordPress Block Editor (Gutenberg) patterns
- React components in `src/components/`
- Shared helpers in `src/helpers/`
- State management via WordPress data stores in `src/stores/`

### Template System

The RSVP block uses a sophisticated template system (`src/blocks/rsvp/templates/`) with different states:

- `attending.js`
- `not-attending.js` 
- `waiting-list.js`
- `past.js`
- `no-status.js`

### Database Schema

- Custom post types: `gatherpress_event`, `gatherpress_venue`
- Custom taxonomy: `_gatherpress_rsvp_status`
- Uses WordPress comments system for RSVP storage
- Venue data stored as post meta

### Testing Structure

- **PHP tests**: `test/unit/php/` using PHPUnit with PMC Unit Test framework
    - Test files must be prefixed with `class-test-` to be discovered
    - Bootstrap file: `test/unit/php/bootstrap.php`
    - Extends `WP_UnitTestCase` for WordPress integration tests
    - Requires wp-env to be running for full test execution
- **JavaScript tests**: `test/unit/js/` using Jest and @testing-library/react
    - Uses `@wordpress/scripts` Jest configuration
    - Test files should be co-located with source files or in `test/` subdirectories
    - Mock files in `test/unit/js/__mocks__/`
- **E2E tests**: `test/e2e/` using Playwright
    - Test files end with `.spec.js`
    - Global setup in `test/e2e/global-setup.js`
    - Storage state saved in `test/e2e/storageState.json` for authentication
    - Default base URL: http://localhost:8889
    - Test results output to `test-results/`
- Test configuration: `phpunit.xml.dist`, `jest.config.js`, `playwright.config.js`

### Dependencies

- **PHP**: Requires WordPress core, uses PMC Unit Test framework
- **JavaScript**: WordPress block editor packages, React components
- **External**: Leaflet for maps, React-Modal (being phased out)

### Development Workflow

- Uses `wp-env` for local WordPress development (Docker-based)
- Webpack build system via `@wordpress/scripts` with experimental modules support
- PHP CodeSniffer with WordPress coding standards (`phpcs.ruleset.xml`)
- PHPStan for static analysis (level 9)
- SonarCloud integration for code quality
- GitHub Actions for CI/CD with multiple workflows:
    - `coding-standards.yml` - PHP and JS linting
    - `phpunit-tests.yml` - PHP unit tests
    - `jest-tests.yml` - JavaScript unit tests
    - `e2e-tests.yml` - Playwright E2E tests
    - `phpstan-tests.yml` - Static analysis
    - `sonarcloud.yml` - Code quality analysis

### Common Development Patterns

**Adding a new block:**
1. Create directory in `src/blocks/[block-name]/`
2. Add `block.json` with block metadata
3. Create `edit.js` for editor interface
4. Add `style.scss` for styling
5. If dynamic, create `render.php` and corresponding PHP class in `includes/core/classes/blocks/`
6. Register block in PHP class extending `GatherPress\Core\Block`

**Modifying event data:**
- Always use the `Event` class: `$event = new Event( $post_id );`
- Access datetime: `$event->get_datetime();`
- Save datetime: `$event->save_datetimes( $datetime_start, $datetime_end, $timezone );`
- Never directly manipulate post meta; use Event methods

**Working with RSVPs:**
- Use `Rsvp` class for individual RSVPs: `$rsvp = new Rsvp( $post_id );`
- Use `Rsvp_Form` for form processing and validation
- RSVPs stored as WordPress comments with custom comment type
- RSVP status stored in custom taxonomy `_gatherpress_rsvp_status`

## Coding Guidelines

### General Practices

1. Always run linting before committing (`npm run lint:php` and `npm run lint:js`)
2. Use existing WordPress hooks and filters patterns
3. Follow WordPress coding standards (enforced by PHPCS)
4. Test both PHP and JavaScript components after changes
5. Consider block editor compatibility when making changes
6. Ensure all new code has appropriate test coverage
7. Build assets before testing (`npm run build` or `npm run start`)

### Important Conventions

- **File naming**:
  - PHP classes: `class-[name].php` (lowercase with hyphens)
  - PHP test files: `class-test-[name].php`
  - Block directories: lowercase with hyphens (e.g., `add-to-calendar`)
- **WordPress coding standards**: All code must pass PHPCS and PHPStan checks
- **Autoloading**: PHP classes are autoloaded based on namespace and file name
- **Build output**: Never commit files in `build/` directory
- **Translations**: Use `gatherpress` text domain for all translatable strings
- **Constants**: Major constants defined in `Event` class (POST_TYPE, DATETIME_FORMAT, etc.)

### PHP Coding Standards

- **Use statements**: Always use `use` statements at the top of files for classes and functions instead of fully qualified namespace calls
  - ✅ Good: `use GatherPress\Core\Event;` then `new Event( $post_id )`
  - ❌ Bad: `new \GatherPress\Core\Event( $post_id )`
  - For functions: `use function GatherPress\Core\filter_input;` then `filter_input( $value )`
- **Namespace resolution**: When moving code between namespaces, ensure proper imports are updated
- **Method organization**: Place related methods in logically grouped classes (e.g., form-related methods in `Rsvp_Form`)
- **Singleton pattern**: Many GatherPress classes use the Singleton trait - check if a class has `use Singleton;`
  - **Singleton classes** (Blocks, Settings, Setup classes): Use `ClassName::get_instance()`
    - ✅ Good: `$instance = Blocks\Rsvp::get_instance(); $instance->method();`
    - ❌ Bad: `new Blocks\Rsvp()` (will fail - constructor is protected)
  - **Regular classes** (Event, Rsvp, Venue): Use normal instantiation with parameters
    - ✅ Good: `$event = new Event( $post_id ); $event->method();`
    - ❌ Bad: `Event::get_instance()` (doesn't exist for these classes)
  - In tests, always check the class structure before deciding instantiation method
  - Look for `use Singleton;` trait to determine if `::get_instance()` should be used

### PHP Linting Requirements

Based on WordPress Coding Standards (WPCS), always ensure:

- **Inline comments**: All inline comments must end with proper punctuation (periods)
  - ✅ Good: `// Process the data and return results.`
  - ❌ Bad: `// Process the data and return results`
- **PHPDoc blocks**: Multi-line variable declarations require proper PHPDoc format with short descriptions
  - ✅ Good:

    ```php
    /**
     * WordPress comment insertion result.
     *
     * @var int|false|\WP_Error $result WordPress may return WP_Error via filters.
     */
    ```

  - ❌ Bad: `/** @var int|false|\WP_Error $result - WordPress may return WP_Error via filters. */`
- **Type handling**: WordPress functions may return multiple types; handle all cases with proper type checking
  - Use `is_wp_error()`, `is_numeric()`, and similar WordPress/PHP functions
  - Cast types explicitly when needed: `(int) $comment->comment_post_ID`

### PHP Testing Guidelines

When writing PHPUnit tests that need WordPress post context:

- **Global variable override**: Never directly assign to `$GLOBALS['post']` - WordPress Coding Standards prohibit this
  - ❌ Bad: `$GLOBALS['post'] = get_post( $post_id );`
  - ✅ Good: `$this->go_to( get_permalink( $post_id ) );` (sets up proper WordPress query context)
- **Post context setup**: Use `$this->go_to()` method to set up WordPress global query and post context
  - This properly initializes `get_the_ID()`, `get_queried_object()`, and other WordPress globals
  - Example: `$this->go_to( get_permalink( $post_id ) );` before calling methods that use `get_the_ID()`
- **Meta data setup**: Use `add_post_meta()` instead of factory meta parameter for better test clarity
  - ✅ Good: `add_post_meta( $post_id, 'meta_key', 'value' );`
  - Works better with WordPress testing framework than factory meta arrays

### JavaScript Coding Standards

When working with JavaScript code:

- **Inline comments**: All inline comments must end with proper punctuation (periods)
  - ✅ Good: `// Check if this is a form-field block with guest count field name.`
  - ❌ Bad: `// Check if this is a form-field block with guest count field name`
- **Comment consistency**: Apply the same punctuation standards across PHP and JavaScript for consistency
- **Block comments**: Multi-line JSDoc comments should follow proper formatting with periods in descriptions
