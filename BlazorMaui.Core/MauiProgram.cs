using Microsoft.Extensions.Logging;
using CommunityToolkit.Maui.Markup;

namespace BlazorMaui.Core
{
    public static class MauiProgram
    {
        public static MauiApp CreateMauiApp()
        {
            // Enable Remote Debugging (Chrome Remote Debugger)
            Environment.SetEnvironmentVariable("WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS", "--remote-debugging-port=5999");

            var builder = MauiApp.CreateBuilder();
            builder
                .UseMauiApp<App>()
                .UseMauiCommunityToolkitMarkup()
                .ConfigureFonts(fonts =>
                {
                    fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                });

            builder.Services.AddMauiBlazorWebView();

#if DEBUG
    		builder.Services.AddBlazorWebViewDeveloperTools();
    		builder.Logging.AddDebug();
#endif

            builder.Services.AddSingleton<App>();
            builder.Services.AddSingleton<WebViewContainer>();

            return builder.Build();
        }
    }
}
