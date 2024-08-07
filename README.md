# .NET MAUI Vue.js Hybrid and Cross-Platform App

This project is designed to help you quickly build a hybrid app for Windows, Linux, macOS, Android, and iOS using .NET MAUI and the Vue.js framework. It leverages Blazor framework JS interop to link .NET code in C# with JavaScript/TypeScript in Vue.js . Best of all, you can build this project without needing to install Microsoft Visual Studio on your Windows, Mac or Linux machine.

## Features

- **Cross-Platform:** Develop for Windows, Linux, macOS, Android, and iOS from a single codebase.
- **Blazor JS Interop:** Seamlessly integrate .NET C# code with JavaScript/TypeScript using Blazor framework's JavaScript Interop.
- **Hybrid App:** Combines the power of .NET MAUI with the flexibility of Javascript frameworks.
- **Web App development:** Develop, debug, and test your app's UI as a web app in the browser.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [.NET SDK](https://dotnet.microsoft.com/download)
- [.NET MAUI](https://github.com/dotnet/docs-maui/blob/main/docs/get-started/installation.md)
- [XCode (Mac Only)](https://xcodereleases.com/)
- GTK+ gtk+-3.0(libgtk-3-0) and webkit2gtk-4 (libwebkit2gtk-4.0) (**Linux Only**)
- [Android SDK](https://developer.android.com/)
- [Node.js and npm](https://nodejs.org/)
- [VSCode](https://code.visualstudio.com/)
- [VSCode .NET MAUI extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.dotnet-maui)

Optional:
- [VSCode .NET Meteor extension (Alternative)](https://marketplace.visualstudio.com/items?itemName=nromanov.dotnet-meteor)
- [VSCode Android WebView Debugging extension](https://marketplace.visualstudio.com/items?itemName=mpotthoff.vscode-android-webview-debug)


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YaDev/maui-vue-app.git
   cd maui-vue-app
   ```
2. Install JavaScript dependencies:

   ```bash
   cd BlazorMaui.UI
   npm install
   ```
3. Install .NET dependencies:

   ```bash
   cd BlazorMaui.Core
   dotnet restore
   ```

## Usage

### Building the Project

**Build the project using VSCode .NET MAUI extension** or build it manually, using the following commands:

- **Windows:**

  ```bash
  cd BlazorMaui.Core
  dotnet build -t:Run -f net8.0-windows10.0.19041.0
  ```
- **Linux:**

  ```bash
  cd BlazorMaui.Core
  dotnet build -t:Run -f net8.0
  ```
- **macOS:**

  ```bash
  cd BlazorMaui.Core
  dotnet build -t:Run -f net8.0-maccatalyst
  ```
- **Android:**

  ```bash
  cd BlazorMaui.Core
  dotnet build -t:Run -f net8.0-android
  ```
- **iOS:**

  ```bash
  cd BlazorMaui.Core
  dotnet build -t:Run -f net8.0-ios
  ```

## Related projects
- [Photino](https://www.tryphotino.io/)
- [Avalonia](https://avaloniaui.net/)
- [Uno](https://platform.uno/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
