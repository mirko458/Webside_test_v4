var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function sendViaResend(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var apiKey, to, from;
        var _c;
        var name = _b.name, email = _b.email, message = _b.message;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    apiKey = process.env.RESEND_API_KEY;
                    to = process.env.CONTACT_TO_EMAIL;
                    from = (_c = process.env.CONTACT_FROM_EMAIL) !== null && _c !== void 0 ? _c : 'website@resend.dev';
                    if (!apiKey || !to) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, fetch('https://api.resend.com/emails', {
                            method: 'POST',
                            headers: {
                                Authorization: "Bearer ".concat(apiKey),
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                from: from,
                                to: to,
                                subject: "New SAP PLM website inquiry from ".concat(name),
                                reply_to: email,
                                text: message
                            })
                        })];
                case 1:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    });
}
export default function handler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var name, email, message;
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    if (req.method !== 'POST') {
                        res.status(405).json({ ok: false });
                        return [2 /*return*/];
                    }
                    name = (_b = (_a = req.body) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.trim();
                    email = (_d = (_c = req.body) === null || _c === void 0 ? void 0 : _c.email) === null || _d === void 0 ? void 0 : _d.trim();
                    message = (_f = (_e = req.body) === null || _e === void 0 ? void 0 : _e.message) === null || _f === void 0 ? void 0 : _f.trim();
                    if (!name || !email || !message) {
                        res.status(400).json({ ok: false, error: 'Missing fields' });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, sendViaResend({ name: name, email: email, message: message })];
                case 1:
                    _g.sent();
                    res.status(200).json({ ok: true });
                    return [2 /*return*/];
            }
        });
    });
}
