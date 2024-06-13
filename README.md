## Event Management Project with Next.js and Firebase

This project is a web application built with Next.js and Firebase for creating, editing, viewing, and deleting events. Additionally, it integrates the SpaceX API to fetch launch data, converts it to events, and reuses existing components.

### Project Structure

```
src
├── actions
│   ├── actionClient.ts
│   └── serverActions.ts
├── api
│   └── firebase
│       ├── config.ts
│       └── crude.ts
├── app
│   ├── view
│   │   └── [id]
│   │   └── page.tsx
│   ├── create
│   │   └── page.tsx
│   ├── event
│   │   └── [id]
│   │       └── page.tsx
│   ├── space
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── component
│   │   ├── CancelButton.tsx
│   │   ├── card-view.tsx
│   │   ├── CardViewLitte.tsx
│   │   ├── EventButtonDelete.tsx
│   │   ├── fotter.tsx
│   │   └── NavBar.tsx
│   ├── ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── textarea.tsx
│   │   └── ThemeButton.tsx
│   ├── CardCreateEvent.tsx
│   ├── CardCreateEvent.tsx
│   └── CardEvEdit.tsx
├── lib
│   ├── type.ts
│   ├── typeSpace.ts
│   └── utils.ts
└── providers
    └── ThemeProviders.tsx
```

### Installation

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/hnkatze/Event-Test.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd Event-Test
   ```
3. **Install dependencies**:
   ```sh
   npm install
   ```
4. **Run the project**:
   ```sh
   npm run dev
   ```

### Features

- **Event Management**: Create, edit, view, and delete events.
- **SpaceX API Integration**: Fetches SpaceX launch data, converts it to events, and reuses existing components to display the data.
- **Reusable Components**: Utilizes reusable UI components for consistency and efficiency.

### File Descriptions

- **actions**: Contains client-side and server-side actions.
  - `actionClient.ts`: Client-side actions.
  - `serverActions.ts`: Server-side actions.
- **api/firebase**: Firebase configuration and CRUD operations.
  - `config.ts`: Firebase configuration file.
  - `crude.ts`: Contains CRUD operations for Firebase.
- **app**: Application pages and layouts.
  - `view/[id]`: Dynamic route for viewing individual events.
  - `create`: Page for creating new events.
  - `event/[id]`: Page for viewing and editing a specific event.
  - `space`: Page for displaying SpaceX launch data.
  - `favicon.ico`: Favicon for the app.
  - `globals.css`: Global CSS styles.
  - `layout.tsx`: Main layout for the application.
  - `page.tsx`: Main page of the application.
- **components**: Reusable UI components.
  - `component`: General components such as buttons, cards, navigation bar, etc.
  - `ui`: Specific UI elements like buttons, cards, dropdowns, inputs, labels, selects, text areas, and theme button.
  - `CardCreateEvent.tsx`: Component for creating events.
  - `CardEvEdit.tsx`: Component for editing events.
- **lib**: Utility files and types.
  - `type.ts`: Type definitions for the events.
  - `typeSpace.ts`: Type definitions for SpaceX launches.
  - `utils.ts`: Utility functions.
- **providers**: Theme provider for the application.
  - `ThemeProviders.tsx`: Theme provider component.

### Usage

- **Creating Events**: Navigate to `/create` to create a new event.
- **Editing Events**: Navigate to `/event/[id]` to edit an existing event.
- **Viewing Events**: Navigate to `/event/[id]` to view event details.
- **SpaceX Launches**: Navigate to `/space` to view SpaceX launch data.
