const modules = import.meta.glob(['./src/modules/**/*.js', './src/modules/**/*.css'])
for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(path, mod)
  })
}
import './style.css'
