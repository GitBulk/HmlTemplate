using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace Blog2.Extensions
{
    public static class BreadCrumbConfig
    {
        public static IHtmlString CreateBreadCrumb(this HtmlHelper helper)
        {
            string controller = helper.ViewContext.RouteData.Values["Controller"].ToString();
            string action = helper.ViewContext.RouteData.Values["Action"].ToString();
            if (string.Equals(controller, "Blog", StringComparison.OrdinalIgnoreCase) == false)
            {
                return MvcHtmlString.Empty;
            }
            var builder = new StringBuilder();
            builder.Append("<div class=\"page-banner\">");
            builder.Append("<div class=\"container\">");
            builder.Append("<div class=\"row\">");
            builder.Append("<div class=\"col-md-6\">");
            builder.Append("<h2>Blog</h2><p>Blog Page With Right Sidebar</p>");
            builder.Append("</div>");
            builder.Append("<div class=\"col-md-6\">");
            builder.Append("<ul class=\"breadcrumbs\">");
            builder.Append("<li><a href=\"#\">Home</a></li><li>Blog</li>");
            builder.Append("</ul></div></div></div></div>");
            return MvcHtmlString.Create(builder.ToString());
        }

    }
}