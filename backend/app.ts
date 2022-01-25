import express from "express";
import { Application } from "express";

class App {
  public app: Application;
  public port: number;

  constructor(appInit: { port: number; middlewares: any; routes: any }) {
    this.app = express();
    this.port = appInit.port;
    this.middlewares(appInit.middlewares);
    this.routes(appInit.routes);
    this.listen()
  }

  private middlewares(middlewares: any[]) {
    middlewares.forEach((ware) => {
      this.app.use(ware);
    });
  }

  private routes(controllers: any[]) {
    controllers.forEach((route) => {
      this.app.use(route.route, route.router);
    });
  }

  private listen() {
    this.app.listen(this.port, () => {
      console.log(`app listening on http://localhost:${this.port}`);
    });
  }
}

export default App;
