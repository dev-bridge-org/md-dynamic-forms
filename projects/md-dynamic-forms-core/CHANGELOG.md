# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.2] - 2021-01-12
### Added
* base-components were added to MdDynamicFormsCoreModule
* base-components were added to public-api to be available for everyone

### Changed
* naming of base-components to fit the naming of angular-components

## [0.0.1] - 2021-01-11
### Added
* core logic of form-generation
* dynamic-form-component as a base wrapper for the formular
* dynamic-field directive which generates the underlying components acording to their configuration
* base-components to prevent duplicate code from components that build upon this core library
* model for the following subjects
  * form (Configuration-classes for the seperate form-elements)
  * layout (Configuration-classes for the layout of the elements)
  * table (Configuration-classes for table-components)
  * validation (Configuration-classes for validation-setup)

