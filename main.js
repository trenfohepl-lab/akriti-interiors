(function () {
  "use strict";
  var C = window.AKRITI;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var wa = function (msg) { return "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(msg || C.waMessage); };

  /* ---------- images with graceful fallback ---------- */
  function setImg(img, key, w) {
    img.src = C.img(C.photos[key], w || 1200);
    img.onerror = function () { img.onerror = null; img.removeAttribute("src"); img.classList.add("ph-fallback"); };
  }
  $$("img[data-ph]").forEach(function (im) { setImg(im, im.dataset.ph, im.classList.contains("hero-img") ? 1800 : 1400); });

  /* ---------- loader ---------- */
  window.addEventListener("load", function () { setTimeout(function () { $("#loader").classList.add("done"); }, 350); });
  setTimeout(function () { $("#loader").classList.add("done"); }, 3000);

  /* ---------- contact info + WhatsApp links ---------- */
  $("#cPhone").textContent = C.phoneDisplay; $("#cPhone").href = "tel:" + C.phoneTel;
  $("#cMail").textContent = C.email; $("#cMail").href = "mailto:" + C.email;
  $("#cAddr").textContent = C.address; $("#cHours").textContent = C.hours + " (please confirm days with the studio)";
  $("#fPhone").textContent = C.phoneDisplay; $("#fPhone").href = "tel:" + C.phoneTel;
  $("#fMail").textContent = C.email; $("#fMail").href = "mailto:" + C.email;
  $("#fAddr").textContent = C.address;
  $("#waBtn").href = wa(); $("#wa").href = wa(); $("#dirBtn").href = C.mapsLink;
  $("#mapFrame").src = C.mapsEmbed;
  $("#yr").textContent = new Date().getFullYear();

  /* ---------- nav ---------- */
  var nav = $("#nav"), burger = $("#burger"), menu = $("#menu");
  function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 40); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  function toggleMenu(open) {
    menu.classList.toggle("open", open); burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open); document.body.style.overflow = open ? "hidden" : "";
  }
  burger.addEventListener("click", function () { toggleMenu(!menu.classList.contains("open")); });
  $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { toggleMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") toggleMenu(false); });

  /* ---------- services ---------- */
  var sg = $("#serviceGrid"), sel = $("#serviceSel");
  C.services.forEach(function (s) {
    var el = document.createElement("article");
    el.className = "svc reveal";
    el.innerHTML = '<div class="ph"><img loading="lazy" alt="' + s.title + ' (sample image)"></div><div class="svc-b"><h3>' + s.title + "</h3><p>" + s.desc +
      '</p><div class="svc-links"><a href="#contact" data-svc="' + s.title + '">Discover More</a><a target="_blank" rel="noopener" href="' +
      wa("Hello Akriti Interiors, I would like to know more about " + s.title + ".") + '">WhatsApp Enquiry</a></div></div>';
    setImg($("img", el), s.img, 800);
    sg.appendChild(el);
    var o = document.createElement("option"); o.textContent = s.title; sel.appendChild(o);
  });
  sg.addEventListener("click", function (e) {
    var a = e.target.closest("[data-svc]"); if (a) sel.value = a.dataset.svc;
  });

  /* ---------- gallery + lightbox ---------- */
  var gal = $("#gallery"), current = "all", visible = [], idx = 0;
  function renderGallery() {
    gal.innerHTML = ""; visible = C.projects.filter(function (p) { return current === "all" || p.cat === current; });
    visible.forEach(function (p, i) {
      var b = document.createElement("button");
      b.className = "card" + (p.tall ? " tall" : ""); b.style.animationDelay = i * 60 + "ms";
      b.setAttribute("aria-label", "Open " + p.title);
      b.innerHTML = '<img loading="lazy" alt="' + p.title + ' (sample)"><span class="tag">Sample</span><div class="card-cap"><span>' + p.cat + "</span><h3>" + p.title + "</h3></div>";
      setImg($("img", b), p.img, 900);
      b.addEventListener("click", function () { openLb(i); });
      gal.appendChild(b);
    });
  }
  $("#filters").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    $$("#filters button").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on");
    current = b.dataset.f; renderGallery();
  });
  renderGallery();

  var lb = $("#lb"), lastFocus = null;
  function showLb() {
    var p = visible[idx]; var im = $("#lbImg");
    im.onerror = function () { im.onerror = null; im.removeAttribute("src"); };
    im.src = C.img(C.photos[p.img], 1800); im.alt = p.title + " (sample image)";
    $("#lbT").textContent = p.title; $("#lbD").textContent = p.desc;
    $("#lbWa").href = wa("Hello Akriti Interiors, I like the \"" + p.title + "\" style and would like to discuss something similar.");
  }
  function openLb(i) { idx = i; lastFocus = document.activeElement; showLb(); lb.hidden = false; document.body.style.overflow = "hidden"; $("#lbX").focus(); }
  function closeLb() { lb.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
  function step(d) { idx = (idx + d + visible.length) % visible.length; showLb(); }
  $("#lbX").addEventListener("click", closeLb);
  $("#lbP").addEventListener("click", function () { step(-1); });
  $("#lbN").addEventListener("click", function () { step(1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb(); if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1);
  });
  // "View Project" on the featured showcase
  var vp = $("[data-open]");
  if (vp) vp.addEventListener("click", function (e) {
    e.preventDefault(); current = "all"; $$("#filters button").forEach(function (x) { x.classList.toggle("on", x.dataset.f === "all"); });
    renderGallery(); var i = visible.findIndex(function (p) { return p.id === vp.dataset.open; }); openLb(Math.max(i, 0));
  });

  /* ---------- process ---------- */
  var pl = $("#processList");
  C.process.forEach(function (s, i) {
    var li = document.createElement("li"); li.className = "reveal";
    li.innerHTML = '<div class="n">0' + (i + 1) + "</div><h3>" + s[0] + "</h3><p>" + s[1] + "</p>"; pl.appendChild(li);
  });

  /* ---------- testimonials ---------- */
  var ti = 0, tt = $("#tText");
  function showT() {
    var t = C.testimonials[ti]; tt.style.opacity = 0;
    setTimeout(function () {
      tt.textContent = "“" + t.text + "”"; $("#tWho").textContent = t.name + " · " + t.place;
      $("#tCount").textContent = (ti + 1) + " / " + C.testimonials.length; tt.style.opacity = 1;
    }, 250);
  }
  $("#tPrev").addEventListener("click", function () { ti = (ti - 1 + C.testimonials.length) % C.testimonials.length; showT(); });
  $("#tNext").addEventListener("click", function () { ti = (ti + 1) % C.testimonials.length; showT(); });
  showT();

  /* ---------- scroll reveal ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 }) : null;
  $$(".reveal").forEach(function (el) { io ? io.observe(el) : el.classList.add("in"); });
  setTimeout(function () { $$(".hero .reveal").forEach(function (el) { el.classList.add("in"); }); }, 200);

  /* ---------- enquiry form ---------- */
  var form = $("#form"), di = $("#dateIn");
  di.min = new Date().toISOString().slice(0, 10);
  function setErr(field, msg) {
    var l = field.closest("label"); if (!l) return; l.classList.toggle("err", !!msg);
    var s = $("small", l); if (s) s.textContent = msg || "";
  }
  function validate() {
    var ok = true, f = form.elements;
    var phone = f.phone.value.replace(/[\s\-+]/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
    var checks = [
      [f.name, f.name.value.trim().length >= 2, "Please enter your full name."],
      [f.phone, /^[6-9]\d{9}$/.test(phone), "Enter a valid 10-digit Indian mobile number."],
      [f.email, !f.email.value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value), "Enter a valid email address."],
      [f.ptype, !!f.ptype.value, "Please select a property type."],
      [f.service, !!f.service.value, "Please select a service."],
      [f.location, f.location.value.trim().length >= 2, "Please enter the project location."]
    ];
    checks.forEach(function (c) { setErr(c[0], c[1] ? "" : c[2]); if (!c[1]) ok = false; });
    return ok;
  }
  $$("input,select,textarea", form).forEach(function (el) { el.addEventListener("input", function () { setErr(el, ""); }); });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate()) { var bad = $(".err input,.err select", form); if (bad) bad.focus(); return; }
    var f = form.elements;
    var data = { name: f.name.value.trim(), phone: f.phone.value.trim(), email: f.email.value.trim(), propertyType: f.ptype.value,
      service: f.service.value, location: f.location.value.trim(), budget: f.budget.value, date: f.date.value, description: f.desc.value.trim() };
    var msg = "Hello Akriti Interiors, I would like to book a consultation.\n\n" +
      "Name: " + data.name + "\nPhone: " + data.phone + (data.email ? "\nEmail: " + data.email : "") +
      "\nProperty: " + data.propertyType + "\nService: " + data.service + "\nLocation: " + data.location +
      (data.budget ? "\nBudget: " + data.budget : "") + (data.date ? "\nPreferred date: " + data.date : "") +
      (data.description ? "\nDetails: " + data.description : "");
    // Future backend hook (optional): set AKRITI.enquiryEndpoint in config.js
    if (C.enquiryEndpoint) { try { fetch(C.enquiryEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); } catch (x) {} }
    var s = $("#success"); s.hidden = false;
    s.innerHTML = "Thank you, " + data.name.replace(/[<>&]/g, "") + ". Your details are ready. To send them to Akriti Interiors, tap <a target=\"_blank\" rel=\"noopener\" href=\"" +
      wa(msg) + "\">Send on WhatsApp</a>. Your consultation is <b>not confirmed</b> until the studio replies and confirms.";
    s.scrollIntoView({ behavior: "smooth", block: "center" });
    form.reset();
  });
})();
