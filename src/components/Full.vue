
<div>
    <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
       <span class="md-body-2">Body 2</span>
    <span class="md-body-1">Body 1</span>
    <span class="md-caption">Caption</span>
    </div>
  </full-page>
</div>


<script>
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);

new Vue({
  el: '#app',
  render: h => h(App)
});
</script>