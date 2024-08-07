using Microsoft.AspNetCore.Components.WebView.Maui;

namespace BlazorMaui.Core
{
    public class WebViewContainer : ContentPage
    {
        public WebViewContainer()
        {
            Content = new BlazorWebView
            {
                HostPage = "wwwroot/index.html",

            };
        }
    }
}
