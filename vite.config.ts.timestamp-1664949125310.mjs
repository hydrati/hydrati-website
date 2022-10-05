// vite.config.ts
import { defineConfig } from "vite";
import unocss from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";
import directives from "@unocss/transformer-directives";
import compileClass from "@unocss/transformer-compile-class";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import { VitePWA } from "vite-plugin-pwa";
import preload from "vite-plugin-inject-preload";
var vite_config_default = defineConfig({
  plugins: [
    unocss({
      presets: [presetUno(), presetIcons({})],
      include: ["src/**/*.tsx", "src/**/*.vue", "src/**/*.jsx"],
      transformers: [directives(), compileClass()]
    }),
    vue(),
    jsx(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.ts",
      injectRegister: "auto",
      devOptions: {
        enabled: true,
        type: "module"
      },
      manifest: {},
      injectManifest: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,ts,tsx}"],
        globIgnores: ["**/__sw/**/*.*"],
        vitePlugins: []
      }
    }),
    preload({
      files: [
        { match: /.*-[a-zA-Z]*\.[a-z-0-9]*\.woff2$/ },
        { match: /.*\.css$/ }
      ]
    })
  ],
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp"
    }
  },
  build: {
    target: ["chrome70"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEb2N1bWVudHNcXFxcaHlkcmF0aS13ZWJzaXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxEb2N1bWVudHNcXFxcaHlkcmF0aS13ZWJzaXRlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Eb2N1bWVudHMvaHlkcmF0aS13ZWJzaXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcblxuaW1wb3J0IHVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBwcmVzZXRVbm8gZnJvbSAnQHVub2Nzcy9wcmVzZXQtdW5vJ1xuaW1wb3J0IHByZXNldEljb25zIGZyb20gJ0B1bm9jc3MvcHJlc2V0LWljb25zJ1xuaW1wb3J0IGRpcmVjdGl2ZXMgZnJvbSAnQHVub2Nzcy90cmFuc2Zvcm1lci1kaXJlY3RpdmVzJ1xuaW1wb3J0IGNvbXBpbGVDbGFzcyBmcm9tICdAdW5vY3NzL3RyYW5zZm9ybWVyLWNvbXBpbGUtY2xhc3MnXG5cbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IGpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcbmltcG9ydCBwcmVsb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLWluamVjdC1wcmVsb2FkJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdW5vY3NzKHtcbiAgICAgIHByZXNldHM6IFtwcmVzZXRVbm8oKSwgcHJlc2V0SWNvbnMoe30pXSxcbiAgICAgIGluY2x1ZGU6IFsnc3JjLyoqLyoudHN4JywgJ3NyYy8qKi8qLnZ1ZScsICdzcmMvKiovKi5qc3gnXSxcbiAgICAgIHRyYW5zZm9ybWVyczogW2RpcmVjdGl2ZXMoKSwgY29tcGlsZUNsYXNzKCldLFxuICAgIH0pLFxuICAgIHZ1ZSgpLFxuICAgIGpzeCgpLFxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgICBzdHJhdGVnaWVzOiAnaW5qZWN0TWFuaWZlc3QnLFxuICAgICAgc3JjRGlyOiAnc3JjJyxcbiAgICAgIGZpbGVuYW1lOiAnc3cudHMnLFxuICAgICAgaW5qZWN0UmVnaXN0ZXI6ICdhdXRvJyxcbiAgICAgIGRldk9wdGlvbnM6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ21vZHVsZScsXG4gICAgICB9LFxuICAgICAgbWFuaWZlc3Q6IHt9LFxuICAgICAgaW5qZWN0TWFuaWZlc3Q6IHtcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2pzLGNzcyxodG1sLGljbyxwbmcsc3ZnLHRzLHRzeH0nXSxcbiAgICAgICAgZ2xvYklnbm9yZXM6IFsnKiovX19zdy8qKi8qLionXSxcbiAgICAgICAgdml0ZVBsdWdpbnM6IFtdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBwcmVsb2FkKHtcbiAgICAgIGZpbGVzOiBbXG4gICAgICAgIHsgbWF0Y2g6IC8uKi1bYS16QS1aXSpcXC5bYS16LTAtOV0qXFwud29mZjIkLyB9LFxuICAgICAgICB7IG1hdGNoOiAvLipcXC5jc3MkLyB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ0Nyb3NzLU9yaWdpbi1PcGVuZXItUG9saWN5JzogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICdDcm9zcy1PcmlnaW4tRW1iZWRkZXItUG9saWN5JzogJ3JlcXVpcmUtY29ycCcsXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6IFsnY2hyb21lNzAnXSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRRLFNBQVMsb0JBQW9CO0FBRXpTLE9BQU8sWUFBWTtBQUNuQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxrQkFBa0I7QUFFekIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxhQUFhO0FBRXBCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFNBQVMsQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUFBLE1BQ3RDLFNBQVMsQ0FBQyxnQkFBZ0IsZ0JBQWdCLGNBQWM7QUFBQSxNQUN4RCxjQUFjLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztBQUFBLElBQzdDLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLGdCQUFnQjtBQUFBLE1BQ2hCLFlBQVk7QUFBQSxRQUNWLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQSxVQUFVLENBQUM7QUFBQSxNQUNYLGdCQUFnQjtBQUFBLFFBQ2QsY0FBYyxDQUFDLHVDQUF1QztBQUFBLFFBQ3RELGFBQWEsQ0FBQyxnQkFBZ0I7QUFBQSxRQUM5QixhQUFhLENBQUM7QUFBQSxNQUNoQjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsUUFBUTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsRUFBRSxPQUFPLG1DQUFtQztBQUFBLFFBQzVDLEVBQUUsT0FBTyxXQUFXO0FBQUEsTUFDdEI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDUCw4QkFBOEI7QUFBQSxNQUM5QixnQ0FBZ0M7QUFBQSxJQUNsQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVEsQ0FBQyxVQUFVO0FBQUEsRUFDckI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
