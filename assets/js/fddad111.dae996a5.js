"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4871],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=p(n),d=i,v=f["".concat(l,".").concat(d)]||f[d]||c[d]||o;return n?t.createElement(v,s(s({ref:r},u),{},{components:n})):t.createElement(v,s({ref:r},u))}));function d(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6080:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var t=n(7462),i=(n(7294),n(3905));const o={id:"supervisor",title:"Supervisor"},s=void 0,a={unversionedId:"reference/misc/supervisor",id:"reference/misc/supervisor",title:"Supervisor",description:"A Supervisor[A] is allowed to supervise the launching and termination of fibers, producing some visible value of type A from the supervision.",source:"@site/docs/reference/misc/supervisor.md",sourceDirName:"reference/misc",slug:"/reference/misc/supervisor",permalink:"/reference/misc/supervisor",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/misc/supervisor.md",tags:[],version:"current",frontMatter:{id:"supervisor",title:"Supervisor"},sidebar:"reference-sidebar",previous:{title:"Schedule",permalink:"/reference/misc/schedule"}},l={},p=[{value:"Creation",id:"creation",level:2},{value:"track",id:"track",level:3},{value:"fibersIn",id:"fibersin",level:3},{value:"Supervising",id:"supervising",level:2},{value:"Example",id:"example",level:2}],u={toc:p};function c(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Supervisor[A]")," is allowed to supervise the launching and termination of fibers, producing some visible value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," from the supervision."),(0,i.kt)("h2",{id:"creation"},"Creation"),(0,i.kt)("h3",{id:"track"},"track"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"track")," creates a new supervisor that tracks children in a set. It takes a boolean ",(0,i.kt)("inlineCode",{parentName:"p"},"weak")," parameter as input, which indicates whether track children in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Weakset")," or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val supervisor = Supervisor.track(true)\n// supervisor: zio.package.UIO[Supervisor[zio.Chunk[zio.Fiber.Runtime[Any, Any]]]] = Sync(\n//   trace = "repl.MdocSession.App.supervisor(supervisor.md:14)",\n//   eval = zio.Supervisor$$$Lambda$10356/551372044@13277d60\n// )\n')),(0,i.kt)("p",null,"We can periodically, report the status of the fibers of our program with the help of the Supervisor."),(0,i.kt)("h3",{id:"fibersin"},"fibersIn"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"fibersIn")," creates a new supervisor with an initial sorted set of fibers."),(0,i.kt)("p",null,"In the following example we are creating a new supervisor from an initial set of fibers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def fiberListSupervisor = for { \n  ref <- ZIO.succeed(new AtomicReference(SortedSet.from(fibers)))\n  s <- Supervisor.fibersIn(ref)\n} yield (s)\n")),(0,i.kt)("h2",{id:"supervising"},"Supervising"),(0,i.kt)("p",null,"Whenever we need to supervise a ZIO effect, we can call ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO#supervised")," function, ",(0,i.kt)("inlineCode",{parentName:"p"},"supervised")," takes a supervisor and return another effect. The behavior of children fibers is reported to the provided supervisor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val supervised = supervisor.flatMap(s => fib(20).supervised(s))\n")),(0,i.kt)("p",null,"Now we can access all information of children fibers through the supervisor."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In the following example we are going to periodically monitor the number of fibers throughout our application life cycle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.Fiber.Status\n\nobject SupervisorExample extends ZIOAppDefault {\n\n  def run = for {\n    supervisor <- Supervisor.track(true)\n    fiber <- fib(20).supervised(supervisor).fork\n    policy = Schedule\n      .spaced(500.milliseconds)\n      .whileInputZIO[Any, Unit](_ => fiber.status.map(_ != Status.Done))\n    logger <- monitorFibers(supervisor)\n      .repeat(policy).fork\n    _ <- logger.join\n    result <- fiber.join\n    _ <- Console.printLine(s"fibonacci result: $result")\n  } yield ()\n\n  def monitorFibers(supervisor: Supervisor[Chunk[Fiber.Runtime[Any, Any]]]) = for {\n    length <- supervisor.value.map(_.length)\n    _ <- Console.printLine(s"number of fibers: $length")\n  } yield ()\n\n  def fib(n: Int): ZIO[Any, Nothing, Int] =\n    if (n <= 1) {\n      ZIO.succeed(1)\n    } else {\n      for {\n        _ <- ZIO.sleep(500.milliseconds)\n        fiber1 <- fib(n - 2).fork\n        fiber2 <- fib(n - 1).fork\n        v2 <- fiber2.join\n        v1 <- fiber1.join\n      } yield v1 + v2\n    }\n\n}\n')))}c.isMDXComponent=!0}}]);