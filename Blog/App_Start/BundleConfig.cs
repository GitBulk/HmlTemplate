using System.Web;
using System.Web.Optimization;

namespace Blog2
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/onlybootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/mainscript").Include(
                      "~/Scripts/script.js"));

            bundles.Add(new ScriptBundle("~/bundles/utilscript").Include(
                      "~/Content/js/jquery.fitvids.js",
                      "~/Content/js/jquery.appear.js",
                      "~/Content/js/count-to.js",
                      "~/Content/js/jquery.nicescroll.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/blog").Include(
                      "~/Content/js/jquery-2.1.1.min.js",
                      "~/Content/js/jquery.lazyload.min.js",
                      "~/Content/js/jquery.migrate.js",
                      "~/Content/js/modernizrr.js",
                      "~/Scripts/bootstrap.min.js",
                      "~/Content/js/jquery.fitvids.js",
                      "~/Content/js/owl.carousel.min.js",
                      "~/Content/js/nivo-lightbox.min.js",
                      "~/Content/js/jquery.isotope.min.js",
                      "~/Content/js/jquery.appear.js",
                      "~/Content/js/jquery.textillate.js",
                      "~/Content/js/jquery.nicescroll.min.js",
                      "~/Content/js/jquery.parallax.js",
                      "~/Content/js/count-to.js",
                      "~/Content/js/script.js"));

            bundles.Add(new StyleBundle("~/Content/blog").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/css/font-awesome.min.css",
                      "~/Content/css/style.css",
                      "~/Content/css/responsive.css",
                      "~/Content/css/colors/blue.css"));

            bundles.Add(new StyleBundle("~/Content/blue").Include(
                      "~/Content/css/colors/blue.css"));

            bundles.Add(new StyleBundle("~/Content/red").Include(
                      "~/Content/css/colors/red.css"));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862

#if DEBUG
            BundleTable.EnableOptimizations = false;
#else
            BundleTable.EnableOptimizations = true;
#endif
        }
    }
}
