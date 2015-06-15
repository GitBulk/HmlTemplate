using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Blog2
{
    public static class ScriptStyleConfig
    {
        public const string ScriptBundlesBlog = "~/bundles/blog";
        public const string StyleBundlesBlog = "~/Content/blog";
        public const string Screen = @"<link href=""{0}"" rel=""stylesheet"" type=""text/css"" media=""screen"" />";

        public static IHtmlString RenderScripts()
        {
            return Scripts.Render(ScriptBundlesBlog);
        }

        public static IHtmlString RenderStyles()
        {
            return Styles.Render(StyleBundlesBlog);
        }
    }
}