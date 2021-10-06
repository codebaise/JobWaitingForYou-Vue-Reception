<template>
  <footer class="footer footer-bar">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="">
            <p class="mb-0">职等你来 © 想你所想 及你所及</p>
          </div>
        </div>
      </div>
    </div><!--end container-->
  </footer>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>

.footer {
  background: #202942;
  padding: 60px 0;
  position: relative;
  color: #adb5bd;
}

.footer .footer-list-title {
  font-size: 18px;
}

.footer .footer-list {
  margin-bottom: 0;
}

.footer .footer-list li {
  margin-bottom: 10px;
}

.footer .footer-list li a {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.footer .footer-list li a:hover {
  color: #e6e8ea;
}

.footer .footer-list li:last-child {
  margin-bottom: 0;
}

.footer .text-foot {
  color: #adb5bd;
}

.footer.footer-bar {
  padding: 20px 0;
}

.footer.footer-bar .payment-cards img {
  height: 25px;
}

.mb-0{
  text-align:center;
}
</style>
