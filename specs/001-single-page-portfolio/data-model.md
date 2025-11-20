# Data Model

## Entities

### Project
- **Fields**:
  - title: string (required, unique)
  - description: string (required)
  - technologies: string[] (required)
  - image: string (URL or path, required)
  - demoLink: string (optional)
  - liveLink: string (optional)
- **Validation Rules**:
  - At least 3 projects must be defined
  - Title must be unique across projects
- **Relationships**: None

### Skill
- **Fields**:
  - name: string (required)
  - category: string (required, e.g., "Frontend", "Backend")
  - proficiencyLevel: number (1-5, required)
- **Validation Rules**:
  - Proficiency level between 1 and 5
- **Relationships**: None

### Contact
- **Fields**:
  - email: string (required)
  - phone: string (optional)
  - socialMediaProfiles: object (key: platform, value: URL, required)
- **Validation Rules**:
  - Email must be valid format
  - At least one social media profile
- **Relationships**: None