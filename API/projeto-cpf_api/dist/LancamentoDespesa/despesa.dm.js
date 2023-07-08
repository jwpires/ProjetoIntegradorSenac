"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
<<<<<<< HEAD
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
=======
>>>>>>> 09402edd8a19c6c5309fa8db0f3f5617d4c40984
var _DespesasArmazenadas_despesas;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespesasArmazenadas = void 0;
const common_1 = require("@nestjs/common");
let DespesasArmazenadas = class DespesasArmazenadas {
    constructor() {
<<<<<<< HEAD
        _DespesasArmazenadas_despesas.set(this, []);
    }
    get Despesa() {
        return __classPrivateFieldGet(this, _DespesasArmazenadas_despesas, "f");
    }
    inserirDespesa(despesa) {
        __classPrivateFieldGet(this, _DespesasArmazenadas_despesas, "f").push(despesa);
    }
    exibeDespesasDashboard() {
        const despesas = this.Despesa;
        return despesas;
=======
        _DespesasArmazenadas_despesas.set(this, void 0);
>>>>>>> 09402edd8a19c6c5309fa8db0f3f5617d4c40984
    }
};
_DespesasArmazenadas_despesas = new WeakMap();
DespesasArmazenadas = __decorate([
    (0, common_1.Injectable)()
], DespesasArmazenadas);
exports.DespesasArmazenadas = DespesasArmazenadas;
//# sourceMappingURL=despesa.dm.js.map