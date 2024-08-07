#if Linux
using Photino.Blazor;

namespace BlazorMaui.Core
{
        class Program
    {
        [STAThread]
        static void Main(string[] args)
        {
            var appBuilder = PhotinoBlazorAppBuilder.CreateDefault(args);

            var app = appBuilder.Build();

            app.MainWindow
               .SetIconFile(Path.Combine("wwwroot", "favicon.ico"))
               .SetTitle("Blazor");

#if DEBUG
            appBuilder.Services.AddLogging();
            app.MainWindow.SetDevToolsEnabled(true);
#endif
               
            AppDomain.CurrentDomain.UnhandledException += (sender, error) =>
            {
                app.MainWindow.ShowMessage("Fatal exception", error.ExceptionObject.ToString());
            };

            app.Run();

        }
    }
}
#endif