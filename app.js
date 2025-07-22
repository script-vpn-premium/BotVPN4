const a1_0x524141 = function () {
  let _0x52c223 = true;
  return function (_0xd69810, _0x2b3830) {
    const _0x49fed2 = _0x52c223 ? function () {
      if (_0x2b3830) {
        const _0x3a39af = _0x2b3830.apply(_0xd69810, arguments);
        _0x2b3830 = null;
        return _0x3a39af;
      }
    } : function () {};
    _0x52c223 = false;
    return _0x49fed2;
  };
}();
const a1_0x589c01 = a1_0x524141(this, function () {
  return a1_0x589c01.toString().search("(((.+)+)+)+$").toString().constructor(a1_0x589c01).search("(((.+)+)+)+$");
});
a1_0x589c01();
const a1_0x147acd = function () {
  let _0x3dd883 = true;
  return function (_0x44ef26, _0x14c3fc) {
    const _0x1eea2a = _0x3dd883 ? function () {
      if (_0x14c3fc) {
        const _0x135dd5 = _0x14c3fc.apply(_0x44ef26, arguments);
        _0x14c3fc = null;
        return _0x135dd5;
      }
    } : function () {};
    _0x3dd883 = false;
    return _0x1eea2a;
  };
}();
(function () {
  a1_0x147acd(this, function () {
    const _0x45c01f = new RegExp("function *\\( *\\)");
    const _0x479e98 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0xe18285 = a1_0x3d0346("init");
    if (!_0x45c01f.test(_0xe18285 + "chain") || !_0x479e98.test(_0xe18285 + "input")) {
      _0xe18285('0');
    } else {
      a1_0x3d0346();
    }
  })();
})();
const os = require('os');
const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const {
  Telegraf,
  session
} = require("telegraf");
const app = express();
const axios = require("axios");
const QRISPayment = require("autoft-qris");
const winston = require('winston');
const fetch = require("node-fetch");
const FormData = require('form-data');
const logger = winston.createLogger({
  'level': "info",
  'format': winston.format.combine(winston.format.timestamp(), winston.format.printf(({
    timestamp: _0x38b7d9,
    level: _0x31e8b5,
    message: _0x448806
  }) => {
    return _0x38b7d9 + " [" + _0x31e8b5.toUpperCase() + "]: " + _0x448806;
  })),
  'transports': [new winston.transports.File({
    'filename': "bot-error.log",
    'level': 'error'
  }), new winston.transports.File({
    'filename': "bot-combined.log"
  })]
});
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    'format': winston.format.simple()
  }));
}
app.use(express.json());
app.use(express.urlencoded({
  'extended': true
}));
const {
  trialssh,
  trialvmess,
  trialvless,
  trialtrojan,
  trialshadowsocks
} = require("./modules/create");
const {
  createssh,
  createvmess,
  createvless,
  createtrojan,
  createshadowsocks
} = require("./modules/create");
const {
  renewssh,
  renewvmess,
  renewvless,
  renewtrojan,
  renewshadowsocks
} = require("./modules/renew");
const fs = require('fs');
const vars = JSON.parse(fs.readFileSync("./.vars.json", "utf8"));
const BOT_TOKEN = vars.BOT_TOKEN;
const port = vars.PORT || 0xc3cb;
const ADMIN = vars.USER_ID;
const NAMA_STORE = vars.NAMA_STORE || "LITESTORE";
const DATA_QRIS = vars.DATA_QRIS;
const MERCHANT_ID = vars.MERCHANT_ID;
const API_KEY = vars.API_KEY;
const groupId = vars.GROUP_CHAT_ID;
const bot = new Telegraf(BOT_TOKEN);
logger.info("Bot initialized");
const db = new sqlite3.Database("./sellvpn.db", _0x2dc18b => {
  if (_0x2dc18b) {
    logger.error("Kesalahan koneksi SQLite3:", _0x2dc18b.message);
  } else {
    logger.info("✅ Terhubung ke SQLite3");
    db.serialize(() => {
      db.run("\n                CREATE TABLE IF NOT EXISTS bonus_config (\n                    id INTEGER PRIMARY KEY CHECK (id = 1),\n                    enabled INTEGER DEFAULT 0,\n                    min_topup INTEGER DEFAULT 0,\n                    bonus_percent INTEGER DEFAULT 0\n                )\n            ", _0xa572e9 => {
        if (_0xa572e9) {
          logger.error("❌ Gagal membuat tabel bonus_config:", _0xa572e9.message);
        } else {
          logger.info("✅ Tabel bonus_config siap");
        }
      });
      db.run("\n                INSERT OR IGNORE INTO bonus_config (id, enabled, min_topup, bonus_percent)\n                VALUES (1, 0, 0, 0)\n            ", _0x127391 => {
        if (_0x127391) {
          logger.error("❌ Gagal insert default bonus_config:", _0x127391.message);
        } else {
          logger.info("✅ Default bonus_config dijamin ada");
        }
      });
      db.run("\n                CREATE TABLE IF NOT EXISTS bonus_log (\n                    id INTEGER PRIMARY KEY AUTOINCREMENT,\n                    user_id INTEGER,\n                    username TEXT,\n                    amount INTEGER,\n                    bonus INTEGER,\n                    timestamp TEXT\n                )\n            ", _0x25be97 => {
        if (_0x25be97) {
          logger.error("❌ Gagal membuat tabel bonus_log:", _0x25be97.message);
        } else {
          logger.info("✅ Tabel bonus_log siap");
        }
      });
      db.run("\n                CREATE TABLE IF NOT EXISTS pending_deposits (\n                    unique_code TEXT PRIMARY KEY,\n                    user_id INTEGER,\n                    username TEXT,\n                    amount INTEGER,\n                    original_amount INTEGER,\n                    timestamp INTEGER,\n                    status TEXT,\n                    qr_message_id INTEGER\n                )\n            ", _0x254419 => {
        if (_0x254419) {
          logger.error("❌ Gagal membuat tabel pending_deposits:", _0x254419.message);
        } else {
          logger.info("✅ Tabel pending_deposits siap");
        }
      });
      db.run("\n                CREATE TABLE IF NOT EXISTS log_penjualan (\n                    id INTEGER PRIMARY KEY AUTOINCREMENT,\n                    user_id INTEGER,\n                    username TEXT,\n                    nama_server TEXT,\n                    tipe_akun TEXT,\n                    harga INTEGER,\n                    masa_aktif_hari INTEGER,\n                    waktu_transaksi TEXT,\n                    action_type TEXT,\n                    user_role TEXT DEFAULT 'member'\n                )\n            ", _0x3adb10 => {
        if (_0x3adb10) {
          logger.error("❌ Gagal membuat tabel log_penjualan:", _0x3adb10.message);
        } else {
          logger.info("✅ Tabel log_penjualan siap");
          db.all("PRAGMA table_info(log_penjualan)", (_0x6b0102, _0x824855) => {
            if (_0x6b0102) {
              logger.error("Error getting table info for log_penjualan:", _0x6b0102.message);
              return;
            }
            if (_0x824855 && Array.isArray(_0x824855)) {
              const _0x19d7df = _0x824855.some(_0xa1dfd6 => _0xa1dfd6.name === 'user_role');
              if (!_0x19d7df) {
                db.run("ALTER TABLE log_penjualan ADD COLUMN user_role TEXT DEFAULT 'member'", _0x2a3ef0 => {
                  if (_0x2a3ef0) {
                    logger.error("Error adding user_role column to log_penjualan table:", _0x2a3ef0.message);
                  } else {
                    logger.info("✅ Added user_role column to log_penjualan table");
                  }
                });
              }
            } else {
              logger.warn("PRAGMA table_info(log_penjualan) did not return an array for columns.");
            }
          });
        }
      });
      db.run("\n                CREATE TABLE IF NOT EXISTS unlimited_trial_users (\n                    user_id INTEGER PRIMARY KEY\n                )\n            ", _0x3e1b10 => {
        if (_0x3e1b10) {
          logger.error("❌ Gagal membuat tabel unlimited_trial_users:", _0x3e1b10.message);
        } else {
          logger.info("✅ Tabel unlimited_trial_users siap");
        }
      });
      db.run("\n                CREATE TABLE IF NOT EXISTS ui_config (\n                    id INTEGER PRIMARY KEY CHECK (id = 1),\n                    show_trial_button INTEGER DEFAULT 1,\n                    show_sewa_script_button INTEGER DEFAULT 1\n                )\n            ", _0x1e589b => {
        if (_0x1e589b) {
          logger.error("❌ Gagal membuat tabel ui_config:", _0x1e589b.message);
        } else {
          logger.info("✅ Tabel ui_config siap");
        }
      });
      db.run("\n                INSERT OR IGNORE INTO ui_config (id, show_trial_button, show_sewa_script_button)\n                VALUES (1, 1, 1)\n            ", _0x8b0975 => {
        if (_0x8b0975) {
          logger.error("❌ Gagal insert default ui_config:", _0x8b0975.message);
        } else {
          logger.info("✅ Default ui_config dijamin ada");
        }
      });
      db.all("PRAGMA table_info(ui_config)", (_0x452171, _0x3159a4) => {
        if (_0x452171) {
          logger.error("❌ Gagal ambil info kolom ui_config:", _0x452171.message);
          return;
        }
        const _0x19a357 = _0x3159a4.some(_0x57315f => _0x57315f.name === "show_sewa_script_button");
        if (!_0x19a357) {
          db.run("ALTER TABLE ui_config ADD COLUMN show_sewa_script_button INTEGER DEFAULT 1", _0x38f751 => {
            if (_0x38f751) {
              logger.error("❌ Gagal menambah kolom show_sewa_script_button:", _0x38f751.message);
            } else {
              logger.info("✅ Kolom show_sewa_script_button ditambahkan ke ui_config");
            }
          });
        } else {
          logger.info("ℹ️ Kolom show_sewa_script_button sudah tersedia di ui_config");
        }
      });
      db.run("\n                CREATE TABLE IF NOT EXISTS reseller_config (\n                    id INTEGER PRIMARY KEY CHECK (id = 1),\n                    discount_percent INTEGER DEFAULT 0\n                )\n            ", _0x129b4e => {
        if (_0x129b4e) {
          logger.error("❌ Gagal membuat tabel reseller_config:", _0x129b4e.message);
        } else {
          logger.info("✅ Tabel reseller_config siap");
        }
      });
      db.run("\n                INSERT OR IGNORE INTO reseller_config (id, discount_percent)\n                VALUES (1, 0)\n            ", _0x2fd510 => {
        if (_0x2fd510) {
          logger.error("❌ Gagal insert default reseller_config:", _0x2fd510.message);
        } else {
          logger.info("✅ Default reseller_config dijamin ada");
        }
      });
      db.run("\n              CREATE TABLE IF NOT EXISTS topup_log (\n                id INTEGER PRIMARY KEY AUTOINCREMENT,\n                user_id INTEGER,\n                username TEXT,\n                amount INTEGER,\n                method TEXT,\n                waktu TEXT\n              )\n            ", _0x389397 => {
        if (_0x389397) {
          logger.error("❌ Gagal membuat tabel topup_log:", _0x389397.message);
        } else {
          logger.info("✅ Tabel topup_log siap");
        }
      });
      db.run("CREATE TABLE IF NOT EXISTS Server (\n              id INTEGER PRIMARY KEY AUTOINCREMENT,\n              domain TEXT,\n              auth TEXT,\n              harga INTEGER,\n              nama_server TEXT,\n              quota INTEGER,\n              iplimit INTEGER,\n              batas_create_akun INTEGER,\n              total_create_akun INTEGER\n            )", _0x56aecd => {
        if (_0x56aecd) {
          logger.error("Kesalahan membuat tabel Server:", _0x56aecd.message);
        } else {
          logger.info("Server table created or already exists");
        }
      });
      db.run("CREATE TABLE IF NOT EXISTS users (\n              id INTEGER PRIMARY KEY AUTOINCREMENT,\n              user_id INTEGER UNIQUE,\n              saldo INTEGER DEFAULT 0,\n              role TEXT DEFAULT 'member',\n              CONSTRAINT unique_user_id UNIQUE (user_id)\n            )", _0x157093 => {
        if (_0x157093) {
          logger.error("Kesalahan membuat tabel users:", _0x157093.message);
        } else {
          logger.info("Users table created or already exists");
          db.all("PRAGMA table_info(users)", (_0x442252, _0x3ae2d9) => {
            if (_0x442252) {
              logger.error("Error getting table info:", _0x442252.message);
              return;
            }
            if (_0x3ae2d9 && Array.isArray(_0x3ae2d9)) {
              const _0x21943a = _0x3ae2d9.some(_0x2d7b2e => _0x2d7b2e.name === "role");
              if (!_0x21943a) {
                db.run("ALTER TABLE users ADD COLUMN role TEXT DEFAULT 'member'", _0xc27ccd => {
                  if (_0xc27ccd) {
                    logger.error("Error adding role column to users table:", _0xc27ccd.message);
                  } else {
                    logger.info("✅ Added role column to users table");
                  }
                });
              }
            } else {
              logger.warn("PRAGMA table_info(users) did not return an array for columns.");
            }
          });
        }
      });
      db.run("\n              CREATE TABLE IF NOT EXISTS TrialLog (\n                user_id INTEGER,\n                date TEXT,\n                count INTEGER DEFAULT 0,\n                UNIQUE(user_id, date)\n            )\n            ");
    });
  }
});
const lastMenus = {};
const userState = {};
logger.info("User state initialized");
bot.command(["start", "menu"], async _0x18b51a => {
  logger.info("📥 Perintah /start atau /menu diterima");
  const _0x56ada1 = _0x18b51a.from.id;
  const _0x132e66 = _0x18b51a.chat.id;
  try {
    await _0x18b51a.telegram.deleteMessage(_0x132e66, _0x18b51a.message.message_id);
    logger.info("🧹 Pesan command user " + _0x56ada1 + " berhasil dihapus");
  } catch (_0x2ea701) {
    console.warn("⚠️ Tidak bisa hapus pesan command user " + _0x56ada1 + ':', _0x2ea701.message);
  }
  db.get("SELECT * FROM users WHERE user_id = ?", [_0x56ada1], (_0x1e14d1, _0xf7ec44) => {
    if (_0x1e14d1) {
      logger.error("❌ Kesalahan saat memeriksa user_id:", _0x1e14d1.message);
      return;
    }
    if (!_0xf7ec44) {
      db.run("INSERT INTO users (user_id, role) VALUES (?, ?)", [_0x56ada1, 'member'], _0x462a2b => {
        if (_0x462a2b) {
          logger.error("❌ Gagal menyimpan user_id:", _0x462a2b.message);
        } else {
          logger.info("✅ User ID " + _0x56ada1 + " berhasil disimpan");
        }
      });
    } else {
      logger.info("ℹ️ User ID " + _0x56ada1 + " sudah ada");
    }
  });
  await sendMainMenu(_0x18b51a);
});
bot.command("admin", async _0x11597a => {
  logger.info("Admin menu requested");
  if (!ADMIN.includes(_0x11597a.from.id)) {
    try {
      await _0x11597a.telegram.deleteMessage(_0x11597a.chat.id, _0x11597a.message.message_id);
    } catch (_0x1dfc40) {}
    return _0x11597a.reply("❌ Anda tidak memiliki izin untuk mengakses menu admin.");
  }
  try {
    await _0x11597a.telegram.deleteMessage(_0x11597a.chat.id, _0x11597a.message.message_id);
  } catch (_0x451ee8) {}
  if (lastMenus[_0x11597a.from.id]) {
    try {
      await _0x11597a.telegram.deleteMessage(_0x11597a.chat.id, lastMenus[_0x11597a.from.id]);
    } catch (_0x5b8dff) {}
    delete lastMenus[_0x11597a.from.id];
  }
  const _0x13436e = await sendAdminMenu(_0x11597a);
  if (_0x13436e?.["message_id"]) {
    lastMenus[_0x11597a.from.id] = _0x13436e.message_id;
  }
});
async function sendMainMenu(_0x3f0a9d) {
  const _0x5deb92 = _0x3f0a9d.from.id;
  const _0x2d763c = _0x3f0a9d.chat.id;
  if (lastMenus[_0x5deb92]) {
    try {
      await _0x3f0a9d.telegram.deleteMessage(_0x2d763c, lastMenus[_0x5deb92]);
      logger.info("🧹 Menu lama milik " + _0x5deb92 + " dihapus oleh sendMainMenu");
      delete lastMenus[_0x5deb92];
    } catch (_0x51099e) {
      console.warn("⚠️ Gagal hapus menu lama user " + _0x5deb92 + " di sendMainMenu:", _0x51099e.message);
    }
  }
  const _0x15a728 = _0x3f0a9d.from.username ? '@' + _0x3f0a9d.from.username : _0x3f0a9d.from.first_name || 'Member';
  let _0x38ad88 = 0x0;
  let _0x46b0ee = "member";
  try {
    const _0x21b9f5 = await new Promise((_0x12ff3f, _0x21c611) => {
      db.get("SELECT saldo, role FROM users WHERE user_id = ?", [_0x5deb92], (_0x369c1a, _0x31678b) => {
        if (_0x369c1a) {
          _0x21c611(_0x369c1a);
        } else {
          _0x12ff3f(_0x31678b);
        }
      });
    });
    _0x38ad88 = _0x21b9f5 ? _0x21b9f5.saldo : 0x0;
    _0x46b0ee = _0x21b9f5 ? _0x21b9f5.role : "member";
  } catch (_0x3d1639) {
    _0x38ad88 = 0x0;
    _0x46b0ee = "member";
  }
  const _0x7ad544 = new Date();
  const _0x249c08 = new Date(_0x7ad544.getFullYear(), _0x7ad544.getMonth(), _0x7ad544.getDate()).toISOString();
  const _0x2f6b15 = new Date(_0x7ad544.getFullYear(), _0x7ad544.getMonth(), _0x7ad544.getDate() - _0x7ad544.getDay()).toISOString();
  const _0x594826 = new Date(_0x7ad544.getFullYear(), _0x7ad544.getMonth(), 0x1).toISOString();
  let _0x49aa15 = 0x0;
  let _0x5a2f55 = 0x0;
  let _0x16edca = 0x0;
  let _0x56bdee = 0x0;
  let _0x444a63 = 0x0;
  let _0x4d31b7 = 0x0;
  try {
    _0x49aa15 = await new Promise(_0xda7cb2 => {
      db.get("SELECT COUNT(*) as count FROM log_penjualan WHERE user_id = ? AND waktu_transaksi >= ? AND action_type IN (\"create\",\"renew\")", [_0x5deb92, _0x249c08], (_0x110656, _0x1a6a56) => _0xda7cb2(_0x1a6a56 ? _0x1a6a56.count : 0x0));
    });
    _0x5a2f55 = await new Promise(_0x44efe4 => {
      db.get("SELECT COUNT(*) as count FROM log_penjualan WHERE user_id = ? AND waktu_transaksi >= ? AND action_type IN (\"create\",\"renew\")", [_0x5deb92, _0x2f6b15], (_0x451256, _0x4ac92a) => _0x44efe4(_0x4ac92a ? _0x4ac92a.count : 0x0));
    });
    _0x16edca = await new Promise(_0x29b1a0 => {
      db.get("SELECT COUNT(*) as count FROM log_penjualan WHERE user_id = ? AND waktu_transaksi >= ? AND action_type IN (\"create\",\"renew\")", [_0x5deb92, _0x594826], (_0x421ca8, _0x4e6209) => _0x29b1a0(_0x4e6209 ? _0x4e6209.count : 0x0));
    });
    _0x56bdee = await new Promise(_0x9b75b6 => {
      db.get("SELECT COUNT(*) as count FROM log_penjualan WHERE waktu_transaksi >= ? AND action_type IN (\"create\",\"renew\")", [_0x249c08], (_0x1c6741, _0x2cafff) => _0x9b75b6(_0x2cafff ? _0x2cafff.count : 0x0));
    });
    _0x444a63 = await new Promise(_0x4e77bd => {
      db.get("SELECT COUNT(*) as count FROM log_penjualan WHERE waktu_transaksi >= ? AND action_type IN (\"create\",\"renew\")", [_0x2f6b15], (_0x4730fb, _0x240a9c) => _0x4e77bd(_0x240a9c ? _0x240a9c.count : 0x0));
    });
    _0x4d31b7 = await new Promise(_0x1fb0a9 => {
      db.get("SELECT COUNT(*) as count FROM log_penjualan WHERE waktu_transaksi >= ? AND action_type IN (\"create\",\"renew\")", [_0x594826], (_0x27de21, _0x31e0a6) => _0x1fb0a9(_0x31e0a6 ? _0x31e0a6.count : 0x0));
    });
  } catch (_0x30af91) {
    logger.error("Error fetching statistics:", _0x30af91.message);
  }
  let _0x391701 = 0x0;
  try {
    const _0x246c0a = await new Promise((_0x179f8b, _0x26c1cc) => {
      db.get("SELECT COUNT(*) AS count FROM users", (_0x44399e, _0x130510) => {
        if (_0x44399e) {
          _0x26c1cc(_0x44399e);
        } else {
          _0x179f8b(_0x130510);
        }
      });
    });
    _0x391701 = _0x246c0a.count;
  } catch (_0x213bfe) {
    _0x391701 = 0x0;
  }
  const _0x22ac87 = await new Promise(_0x53f4f1 => {
    db.get("SELECT show_trial_button FROM ui_config WHERE id = 1", (_0x5234d4, _0x12e9cc) => {
      if (_0x5234d4) {
        return _0x53f4f1(false);
      }
      _0x53f4f1(_0x12e9cc?.["show_trial_button"] === 0x1);
    });
  });
  const _0x11041c = await new Promise(_0x39a84e => {
    db.get("SELECT * FROM unlimited_trial_users WHERE user_id = ?", [_0x5deb92], (_0x183ff3, _0x565584) => {
      if (_0x183ff3) {
        return _0x39a84e(false);
      }
      _0x39a84e(_0x565584 != null);
    });
  });
  const _0x34002f = ADMIN.includes(_0x5deb92);
  const _0x1da2be = _0x22ac87 || _0x11041c || _0x34002f;
  const _0xe6c561 = os.uptime();
  const _0x199613 = Math.floor(_0xe6c561 / 0x15180);
  const _0x44c646 = Math.floor(_0xe6c561 % 0x15180 / 0xe10);
  const _0x312069 = Math.floor(_0xe6c561 % 0xe10 / 0x3c);
  const _0x4779d4 = Math.floor(_0xe6c561 % 0x3c);
  const _0x385c2c = _0x199613 + "d " + _0x44c646 + "h " + _0x312069 + "m " + _0x4779d4 + 's';
  const _0x30c50e = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const _0xb5415b = _0x30c50e[_0x7ad544.getDay()];
  const _0x21d308 = new Intl.DateTimeFormat("id-ID", {
    'day': "numeric",
    'month': "long",
    'year': 'numeric'
  }).format(_0x7ad544);
  const _0xc87167 = _0x7ad544.toTimeString().split(" ")[0x0];
  let _0x4ab5dc = 0x0;
  try {
    _0x4ab5dc = await new Promise((_0x7fc32, _0x5c8c56) => {
      db.get("SELECT COUNT(*) AS count FROM Server", (_0x4193eb, _0x46d62a) => {
        if (_0x4193eb) {
          _0x5c8c56(_0x4193eb);
        } else {
          _0x7fc32(_0x46d62a.count);
        }
      });
    });
  } catch (_0x2aabf9) {
    logger.error("Gagal ambil data jumlah server:", _0x2aabf9.message);
  }
  let _0x501884 = '';
  if (ADMIN.includes(_0x5deb92)) {
    _0x501884 = "👑 <b>» Status:</b> <code>Admin</code>";
  } else if (_0x46b0ee === 'reseller') {
    _0x501884 = "🏆 <b>» Status:</b> <code>Reseller</code>";
  } else {
    _0x501884 = "👤 <b>» Status:</b> <code>Member</code>";
  }
  const _0x2e7afb = "\n━━━━━━━━━━━━━━━━━━━━━━━━\n≡                    <b>ROBOT VPN</b>                      ≡\n━━━━━━━━━━━━━━━━━━━━━━━━\nSelamat datang di <b>" + NAMA_STORE + "</b> 🚀\nBot otomatis untuk membeli Akun VPN dengan mudah dan cepat.\n━━━━━━━━━━━━━━━━━━━━━━━━\n💲 <b>» Saldo:</b> <code>Rp." + _0x38ad88.toLocaleString("id-ID") + "</code>\n━━━━━━━━━━━━━━━━━━━━━━━━\n" + _0x501884 + "\n🌐 <b>» Username:</b> " + _0x15a728 + "\n📋 <b>» Your ID:</b> <code>" + _0x5deb92 + "</code>\n♻️ <b>» Bot Aktif:</b> <code>" + _0x385c2c + "</code>\n✨ <b>» Trial 2x Sehari</b>\n🥇 <b>» Support Wildcard & Enhanced</b>\n━━━━━━━━━━━━━━━━━━━━━━━━\n<blockquote>📚 <b>Statistik Anda</b>\n» Hari Ini: " + _0x49aa15 + " akun\n» Minggu Ini: " + _0x5a2f55 + " akun\n» Bulan Ini: " + _0x16edca + " akun\n\n🌐 <b>Statistik Global</b>\n» Hari Ini: " + _0x56bdee + " akun\n» Minggu Ini: " + _0x444a63 + " akun\n» Bulan Ini: " + _0x4d31b7 + " akun</blockquote>\n━━━━━━━━━━━━━━━━━━━━━━━━\n🧭 <b>» Waktu:</b> <code>" + _0xc87167 + " WIB</code>\n🏷️ <b>» Tanggal:</b> <code>" + _0xb5415b + ", " + _0x21d308 + "</code>\n🏷️ <b>» Server:</b> <code>" + _0x4ab5dc + "</code> <b>|️ Total User:</b> <code>" + _0x391701 + "</code>\n🥇 <b>» Developer Bot:</b>\n🏷️ <b>» </b><a href=\"https://t.me/yha_bot\">@yha_bot</a>, <a href=\"https://t.me/AutoFtBot69\">@AutoFtBot69</a>\n🥈 <b>» Modifikasi Oleh:</b>\n🏷️ <b>» </b><a href=\"https://t.me/freenet_on\">@freenet_on</a>, <a href=\"https://t.me/kytxz\">@kytxz</a>, <a href=\"https://t.me/JesVpnt\">@JesVpnt</a>\n━━━━━━━━━━━━━━━━━━━━━━━━";
  const _0x12140a = [];
  if (_0x1da2be) {
    _0x12140a.push([{
      'text': "💠 Trial Akun",
      'callback_data': "service_trial"
    }]);
  }
  _0x12140a.push([{
    'text': "✏️ Buat Akun",
    'callback_data': "service_create"
  }, {
    'text': "♻️ Renew Akun",
    'callback_data': "service_renew"
  }]);
  _0x12140a.push([{
    'text': "🛒 Sewa Script",
    'callback_data': "service_sewascript"
  }]);
  _0x12140a.push([{
    'text': "💰 TopUp Saldo",
    'callback_data': "menu_topup"
  }]);
  try {
    if (_0x3f0a9d.updateType === "callback_query" && _0x3f0a9d.callbackQuery.message) {
      try {
        await _0x3f0a9d.editMessageText(_0x2e7afb, {
          'parse_mode': "HTML",
          'disable_web_page_preview': true,
          'reply_markup': {
            'inline_keyboard': _0x12140a
          }
        });
      } catch (_0xba4cf6) {
        if (_0xba4cf6 && _0xba4cf6.response && _0xba4cf6.response.error_code === 0x190 && (_0xba4cf6.response.description.includes("message is not modified") || _0xba4cf6.response.description.includes("message to edit not found") || _0xba4cf6.response.description.includes("message can't be edited"))) {
          logger.info("Edit message diabaikan karena pesan sudah diedit/dihapus atau tidak berubah.");
        } else {
          logger.error("Error saat mengedit menu utama:", _0xba4cf6);
          await _0x3f0a9d.reply(_0x2e7afb, {
            'parse_mode': 'HTML',
            'disable_web_page_preview': true,
            'reply_markup': {
              'inline_keyboard': _0x12140a
            }
          })["catch"](_0x1da699 => logger.error("Error saat mengirim menu utama sebagai pesan baru setelah edit gagal:", _0x1da699));
        }
      }
    } else {
      try {
        await _0x3f0a9d.reply(_0x2e7afb, {
          'parse_mode': 'HTML',
          'disable_web_page_preview': true,
          'reply_markup': {
            'inline_keyboard': _0x12140a
          }
        });
      } catch (_0x34ce96) {
        logger.error("Error saat mengirim menu utama:", _0x34ce96);
      }
    }
    logger.info("Main menu sent");
  } catch (_0x311b89) {
    logger.error("Error umum saat mengirim menu utama:", _0x311b89);
  }
}
bot.command("hapuslog", async _0x2f88d4 => {
  if (!ADMIN.includes(_0x2f88d4.from.id)) {
    return _0x2f88d4.reply("Tidak ada izin!");
  }
  try {
    if (fs.existsSync("bot-combined.log")) {
      fs.unlinkSync("bot-combined.log");
    }
    if (fs.existsSync("bot-error.log")) {
      fs.unlinkSync("bot-error.log");
    }
    _0x2f88d4.reply("Log berhasil dihapus.");
    logger.info("Log file dihapus oleh admin.");
  } catch (_0x356ae4) {
    _0x2f88d4.reply("Gagal menghapus log: " + _0x356ae4.message);
    logger.error("Gagal menghapus log: " + _0x356ae4.message);
  }
});
bot.command("helpadmin", async _0x37de10 => {
  const _0x2c5b35 = _0x37de10.from.id;
  if (!ADMIN.includes(_0x2c5b35)) {
    return _0x37de10.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  _0x37de10.reply("\n*📋 Daftar Perintah:*\n\n1. /start - Mengaktifkan bot.\n2. /menu - Menampilkan daftar menu bot.\n3. /admin - Menampilkan fitur-fitur admin.\n4. /broadcast - Kirim pesan siaran ke semua pengguna.\n5. /addserver - Menambahkan server baru.\n6. /addsaldo - Menambahkan saldo ke akun pengguna.\n7. /kurangisaldo - Mengurangi saldo user.\n8. /resetsaldo - Mengatur ulang saldo user.\n9. /listsaldo - Menampilkan daftar saldo user.\n10. /ceksaldo - Melihat saldo user.\n11. /editharga - Mengedit harga layanan.\n12. /editnama - Mengedit nama server.\n13. /editdomain - Mengedit domain server.\n14. /editauth - Mengedit auth server.\n15. /editlimitquota - Mengedit batas quota server.\n16. /editlimitip - Mengedit batas IP server.\n17. /editlimitcreate - Mengedit batas pembuatan akun server.\n18. /edittotalcreate - Mengedit total pembuatan akun server.\n19. /hapuslog - Menghapus log bot.\n20. /unlimitedtrial - Memberikan akses trial unlimited ke user.\n21. /removeunlimitedtrial - Mencabut akses trial unlimited dari user.\n22. /listunlimitedtrial - Melihat daftar user yang memiliki trial unlimited.\n23. /setreseller - Mengubah role user menjadi reseller.\n24. /unsetreseller - Mengubah role reseller menjadi member biasa.\n25. /listreseller - Melihat daftar semua reseller.\n26. /setdiskonreseller - Mengatur persentase diskon untuk reseller.\n27. /resetdiskonreseller - Mereset persentase diskon reseller ke 0%.\n28. /helpadmin - Menampilkan daftar perintah admin.\n\n📝 *Catatan:* Gunakan perintah ini dengan format yang benar untuk menghindari kesalahan.\n", {
    'parse_mode': "Markdown"
  });
});
bot.command("broadcast", async _0x4569b5 => {
  const _0x2fc3c6 = _0x4569b5.message.from.id;
  if (!ADMIN.includes(_0x2fc3c6)) {
    return _0x4569b5.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  const _0x8dd3de = _0x4569b5.message.reply_to_message;
  const _0x320a41 = _0x4569b5.message.text.split(" ").slice(0x1).join(" ");
  if (!_0x8dd3de && !_0x320a41) {
    return _0x4569b5.reply("📌 *Cara menggunakan perintah broadcast:*\n\n1. Balas pesan (teks/gambar/video/dokumen) lalu ketik /broadcast untuk menyiarkan media tersebut\n2. Atau langsung kirim `/broadcast Pesanmu` untuk broadcast teks biasa\n\nContoh:\n`/broadcast Hallo semua!`", {
      'parse_mode': 'Markdown'
    });
  }
  db.all("SELECT user_id FROM users", [], async (_0x8910a, _0x59e90c) => {
    if (_0x8910a) {
      logger.error("❌ DB Error saat ambil user untuk broadcast:", _0x8910a);
      return _0x4569b5.reply("⚠️ Gagal mengambil daftar pengguna.");
    }
    let _0x1e8612 = 0x0;
    let _0x17d05a = 0x0;
    for (const _0x294745 of _0x59e90c) {
      try {
        if (_0x8dd3de && _0x8dd3de.message_id) {
          await bot.telegram.copyMessage(_0x294745.user_id, _0x4569b5.chat.id, _0x8dd3de.message_id);
        } else {
          if (_0x320a41) {
            await bot.telegram.sendMessage(_0x294745.user_id, _0x320a41);
          }
        }
        _0x1e8612++;
        logger.info("✅ Broadcast sukses ke " + _0x294745.user_id);
      } catch (_0x393f0b) {
        _0x17d05a++;
        if (_0x393f0b.response && _0x393f0b.response.error_code === 0x193) {
          logger.warn("🚫 User " + _0x294745.user_id + " blokir bot");
        } else {
          if (_0x393f0b.response && _0x393f0b.response.error_code === 0x1ad) {
            const _0x1e243e = _0x393f0b.response.parameters?.["retry_after"] || 0x5;
            logger.warn("⏳ Telegram rate limit: tunggu " + _0x1e243e + " detik");
            await new Promise(_0x242088 => setTimeout(_0x242088, _0x1e243e * 0x3e8));
          } else {
            logger.warn("❌ Gagal broadcast ke " + _0x294745.user_id + ": " + _0x393f0b.message);
          }
        }
      }
      await new Promise(_0x880453 => setTimeout(_0x880453, 0x1f4));
    }
    _0x4569b5.reply("📣 Broadcast selesai!\n✅ Berhasil: " + _0x1e8612 + "\n❌ Gagal: " + _0x17d05a);
  });
});
function formatRupiah(_0x566eee) {
  return 'Rp' + (_0x566eee || 0x0).toLocaleString("id-ID");
}
bot.action(/^batal_topup_(.+)$/, async _0x395b7e => {
  const _0xfd2c3c = _0x395b7e.match[0x1];
  const _0x5b1d13 = global.pendingDeposits[_0xfd2c3c];
  if (!_0x5b1d13) {
    return _0x395b7e.answerCbQuery("Transaksi sudah tidak aktif atau telah dibatalkan.", {
      'show_alert': true
    });
  }
  try {
    if (_0x5b1d13.qrMessageId) {
      try {
        await bot.telegram.deleteMessage(_0x5b1d13.userId, _0x5b1d13.qrMessageId);
      } catch (_0x56ef3d) {}
    }
    delete global.pendingDeposits[_0xfd2c3c];
    await deletePendingDeposit(_0xfd2c3c);
    await _0x395b7e.answerCbQuery("Topup dibatalkan.");
    await _0x395b7e.reply("❌ Topup QRIS Orkut telah dibatalkan. Silahkan topup ulang jika ingin mencoba lagi.", {
      'parse_mode': "Markdown",
      'reply_markup': {
        'inline_keyboard': [[{
          'text': "🔙 Kembali ke Menu Top-up",
          'callback_data': "menu_topup"
        }]]
      }
    });
    try {
      const _0x3f5785 = _0x395b7e.chat.id;
      const _0x14d583 = _0x395b7e.from.id;
      const _0x3baccc = _0x395b7e.update.callback_query.message?.["message_id"];
      if (_0x3baccc) {
        await _0x395b7e.telegram.deleteMessage(_0x3f5785, _0x3baccc);
        logger.info("🧹 Pesan command user " + _0x14d583 + " berhasil dihapus");
      }
    } catch (_0x44e319) {
      const _0x53ead2 = _0x395b7e.from.id;
      console.warn("⚠️ Tidak bisa hapus pesan command user " + _0x53ead2 + ':', _0x44e319.message);
    }
  } catch (_0x190267) {
    logger.error("Gagal batal topup:", _0x190267);
    await _0x395b7e.answerCbQuery("Gagal batal topup.", {
      'show_alert': true
    });
  }
});
bot.action("statistik_penjualan", async _0x31dfa0 => {
  await _0x31dfa0.answerCbQuery();
  const _0x5aed3e = new Date();
  const _0x452737 = new Date(_0x5aed3e.getFullYear(), _0x5aed3e.getMonth(), _0x5aed3e.getDate()).toISOString();
  const _0x15df13 = new Date(new Date().setDate(_0x5aed3e.getDate() - _0x5aed3e.getDay())).toISOString();
  const _0x3ec789 = new Date(Date.now() - 604800000).toISOString();
  const _0x153071 = new Date(_0x5aed3e.getFullYear(), _0x5aed3e.getMonth(), 0x1).toISOString();
  db.all("\n    SELECT tipe_akun, COUNT(*) AS jumlah, SUM(harga) AS total_harga\n    FROM log_penjualan\n    GROUP BY tipe_akun\n  ", [], (_0x2c3bfa, _0x3bba10) => {
    if (_0x2c3bfa || _0x3bba10.length === 0x0) {
      return _0x31dfa0.reply("⚠️ Belum ada data penjualan.");
    }
    let _0x3ca45d = 0x0;
    let _0x1072ea = 0x0;
    const _0x400d63 = _0x3bba10.map(_0x3632b1 => {
      _0x3ca45d += _0x3632b1.jumlah;
      _0x1072ea += _0x3632b1.total_harga;
      return "📦 *" + _0x3632b1.tipe_akun.toUpperCase() + "*\nJumlah Terjual: " + _0x3632b1.jumlah + "\nTotal: " + ('Rp' + (_0x3632b1.total_harga || 0x0).toLocaleString("id-ID"));
    }).join("\n\n");
    db.get("SELECT SUM(harga) AS total FROM log_penjualan WHERE waktu_transaksi >= ?", [_0x452737], (_0x463fc6, _0x265e09) => {
      db.get("SELECT SUM(harga) AS total FROM log_penjualan WHERE waktu_transaksi >= ?", [_0x3ec789], (_0x56843c, _0x1c2070) => {
        db.get("SELECT SUM(harga) AS total FROM log_penjualan WHERE waktu_transaksi >= ?", [_0x15df13], (_0x23354f, _0x27b304) => {
          db.get("SELECT SUM(harga) AS total FROM log_penjualan WHERE waktu_transaksi >= ?", [_0x153071], (_0x8f5a19, _0x3845be) => {
            const _0x46d2e1 = _0x265e09?.["total"] || 0x0;
            const _0x1f0365 = _0x1c2070?.["total"] || 0x0;
            const _0x3a1c5e = _0x27b304?.["total"] || 0x0;
            const _0x16ef24 = _0x3845be?.["total"] || 0x0;
            const _0x5f1a51 = "📊 *Statistik Penjualan per Tipe Akun:*\n\n" + _0x400d63 + "\n\n" + ("🧾 *Total Semua Akun Terjual:* " + _0x3ca45d + "\n") + ("💰 *Total Uang Masuk:* " + ('Rp' + (_0x1072ea || 0x0).toLocaleString("id-ID")) + "\n\n") + ("📅 *Hari Ini:* " + ('Rp' + (_0x46d2e1 || 0x0).toLocaleString("id-ID")) + "\n") + ("📈 *7 Hari Terakhir:* " + ('Rp' + (_0x1f0365 || 0x0).toLocaleString("id-ID")) + "\n") + ("🗓️ *Minggu Ini:* " + ('Rp' + (_0x3a1c5e || 0x0).toLocaleString("id-ID")) + "\n") + ("📆 *Bulan Ini:* " + ('Rp' + (_0x16ef24 || 0x0).toLocaleString("id-ID")));
            _0x31dfa0.reply(_0x5f1a51, {
              'parse_mode': "Markdown"
            });
          });
        });
      });
    });
  });
});
bot.command("addsaldo", async _0x4bf707 => {
  const _0x298b70 = _0x4bf707.from.id;
  if (!ADMIN.includes(_0x298b70)) {
    return _0x4bf707.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  const _0x4bd32d = _0x4bf707.message.text.split(" ");
  if (_0x4bd32d.length !== 0x3) {
    return _0x4bf707.reply("⚠️ Format salah. Gunakan: `/addsaldo <user_id> <jumlah>`", {
      'parse_mode': "Markdown"
    });
  }
  const _0x2504cb = parseInt(_0x4bd32d[0x1]);
  const _0x4533e9 = parseInt(_0x4bd32d[0x2]);
  if (isNaN(_0x2504cb) || isNaN(_0x4533e9)) {
    return _0x4bf707.reply("⚠️ `user_id` dan `jumlah` harus berupa angka.", {
      'parse_mode': "Markdown"
    });
  }
  if (/\s/.test(_0x4bd32d[0x1]) || /\./.test(_0x4bd32d[0x1]) || /\s/.test(_0x4bd32d[0x2]) || /\./.test(_0x4bd32d[0x2])) {
    return _0x4bf707.reply("⚠️ `user_id` dan `jumlah` tidak boleh mengandung spasi atau titik.", {
      'parse_mode': "Markdown"
    });
  }
  db.get("SELECT * FROM users WHERE user_id = ?", [_0x2504cb], (_0x335bce, _0xac7634) => {
    if (_0x335bce) {
      logger.error("⚠️ Kesalahan saat memeriksa `user_id`:", _0x335bce.message);
      return _0x4bf707.reply("⚠️ Kesalahan saat memeriksa `user_id`.", {
        'parse_mode': "Markdown"
      });
    }
    if (!_0xac7634) {
      return _0x4bf707.reply("⚠️ `user_id` tidak terdaftar.", {
        'parse_mode': "Markdown"
      });
    }
    db.run("UPDATE users SET saldo = saldo + ? WHERE user_id = ?", [_0x4533e9, _0x2504cb], function (_0xb67664) {
      if (_0xb67664) {
        logger.error("⚠️ Kesalahan saat menambahkan saldo:", _0xb67664.message);
        return _0x4bf707.reply("⚠️ Kesalahan saat menambahkan saldo.", {
          'parse_mode': "Markdown"
        });
      }
      if (this.changes === 0x0) {
        return _0x4bf707.reply("⚠️ Pengguna tidak ditemukan.", {
          'parse_mode': "Markdown"
        });
      }
      _0x4bf707.reply("✅ Saldo sebesar `" + _0x4533e9 + "` berhasil ditambahkan untuk `user_id` `" + _0x2504cb + '`.', {
        'parse_mode': "Markdown"
      });
    });
  });
});
bot.action("menu_topup", async _0x3e5835 => {
  await _0x3e5835.answerCbQuery();
  try {
    if (_0x3e5835.callbackQuery?.["message"]?.["message_id"]) {
      await _0x3e5835.deleteMessage(_0x3e5835.callbackQuery.message.message_id);
    }
  } catch (_0x12b65b) {}
  const _0x33dc97 = loadButtonConfig ? loadButtonConfig() : {
    'topup_saldo': true,
    'topup_saweria': true
  };
  const _0x4685d1 = [];
  if (_0x33dc97.topup_saldo) {
    _0x4685d1.push([{
      'text': "💸 Topup QRIS Orkut",
      'callback_data': "topup_saldo"
    }]);
  }
  if (_0x33dc97.topup_saweria) {
    _0x4685d1.push([{
      'text': "💸 Topup QRIS Saweria",
      'callback_data': "topup_saweria"
    }]);
  }
  _0x4685d1.push([{
    'text': "🔙 Kembali",
    'callback_data': "send_main_menu"
  }]);
  const _0x169362 = await _0x3e5835.reply("\n━━━━━━━━━━━━━━━━━━━━━━\n         🏷️ *≡ ROBOT VPN ≡* 🏷️\n━━━━━━━━━━━━━━━━━━━━━━\n💸 *» Pilih Menu Topup Dibawah Ini:*", {
    'parse_mode': "Markdown",
    'reply_markup': {
      'inline_keyboard': _0x4685d1
    }
  });
  if (_0x169362?.['message_id']) {
    lastMenus[_0x3e5835.from.id] = _0x169362.message_id;
  }
});
async function processDepositSaweria(_0x433ecf, _0x1731fe) {
  try {
    const _0x1950f0 = process.env.SAWERIA_USERNAME || vars.SAWERIA_USERNAME;
    const _0x26906a = process.env.SAWERIA_EMAIL || vars.SAWERIA_EMAIL;
    if (!_0x1950f0 || !_0x26906a) {
      return _0x433ecf.reply("❌ *Konfigurasi Saweria belum lengkap.*", {
        'parse_mode': 'Markdown'
      });
    }
    const _0x726da1 = parseInt(_0x1731fe);
    const _0x2f96e4 = "https://saweria.autsc.my.id/api/create?username=" + encodeURIComponent(_0x1950f0) + "&amount=" + _0x726da1 + "&email=" + encodeURIComponent(_0x26906a);
    const _0xd9848d = await axios.get(_0x2f96e4);
    const _0x3341d5 = _0xd9848d.data;
    if (!_0x3341d5.success || !_0x3341d5.data?.["qrImageUrl"] || !_0x3341d5.data?.["transactionId"]) {
      return _0x433ecf.reply("❌ *Gagal membuat QR Saweria.*", {
        'parse_mode': 'Markdown'
      });
    }
    const {
      qrImageUrl: _0x1b3dee,
      transactionId: _0x4373ae,
      checkPaymentUrl: _0x1d8908,
      timestamp: _0x124f06
    } = _0x3341d5.data;
    let _0x12891d = 0x0;
    let _0x3a3fa0 = 0x0;
    await new Promise(_0x12d764 => {
      db.get("SELECT * FROM bonus_config WHERE id = 1", (_0x216a8a, _0x1e14c8) => {
        if (!_0x216a8a && _0x1e14c8 && _0x1e14c8.enabled && _0x726da1 >= _0x1e14c8.min_topup) {
          _0x3a3fa0 = _0x1e14c8.bonus_percent;
          _0x12891d = Math.floor(_0x726da1 * _0x3a3fa0 / 0x64);
        }
        _0x12d764();
      });
    });
    if (!global.pendingDepositsSaweria) {
      global.pendingDepositsSaweria = {};
    }
    global.pendingDepositsSaweria[_0x4373ae] = {
      'userId': _0x433ecf.from.id,
      'username': _0x433ecf.from.username ? '@' + _0x433ecf.from.username : "Tidak tersedia",
      'amount': _0x726da1,
      'bonus': _0x12891d,
      'bonus_percent': _0x3a3fa0,
      'created_at': Date.now(),
      'checked': false
    };
    const _0x18ccf7 = await _0x433ecf.replyWithPhoto(_0x1b3dee, {
      'caption': "❇️ *Informasi Deposit Anda* ❇️\n\n🏷️ *» Kode Transaksi:* `" + _0x4373ae + "`\n🏷️ *» Jumlah:* Rp" + _0x726da1.toLocaleString('id-ID') + "\n🏷️ *» Waktu:* " + _0x124f06 + "\n\n🏷️ *» Silahkan scan QR berikut untuk membayar melalui QRIS.*\n🏷️ *» Expired:* 5 menit dari sekarang",
      'parse_mode': "Markdown"
    });
    global.pendingDepositsSaweria[_0x4373ae].qrMessageId = _0x18ccf7.message_id;
  } catch (_0x1b8fff) {
    logger.error("❌ Gagal proses QRIS Saweria:", _0x1b8fff.stack || _0x1b8fff);
    await _0x433ecf.reply("❌ *Gagal membuat QRIS Saweria.* Silahkan coba lagi nanti.", {
      'parse_mode': 'Markdown'
    });
  }
}
setInterval(async () => {
  try {
    const _0x4c7dd5 = global.pendingDepositsSaweria || {};
    const _0x5143b5 = Object.entries(_0x4c7dd5);
    if (_0x5143b5.length === 0x0) {
      return;
    }
    for (const [_0x3b1d8a, _0x190375] of _0x5143b5) {
      if (_0x190375.checked) {
        continue;
      }
      const _0xc9009 = Date.now() - _0x190375.created_at;
      if (_0xc9009 > 300000) {
        try {
          if (_0x190375.qrMessageId) {
            await bot.telegram.deleteMessage(_0x190375.userId, _0x190375.qrMessageId)["catch"](_0x366de7 => logger.warn("Gagal hapus pesan QR expired untuk user " + _0x190375.userId + ": " + _0x366de7.message));
          }
          await bot.telegram.sendMessage(_0x190375.userId, "❌ *Pembayaran Saweria Expired*\n\nWaktu pembayaran telah habis. Silahkan klik Top Up lagi untuk mendapatkan QR baru.", {
            'parse_mode': "Markdown"
          });
          logger.info("Transaksi Saweria " + _0x3b1d8a + " expired untuk user " + _0x190375.userId);
        } catch (_0x103ddc) {
          logger.error("Error saat menangani expired " + _0x3b1d8a + ": " + _0x103ddc.message);
        } finally {
          delete global.pendingDepositsSaweria[_0x3b1d8a];
        }
        continue;
      }
      try {
        const _0x434258 = await axios.get("https://saweria.autsc.my.id/check-payment?idtransaksi=" + _0x3b1d8a);
        const _0x3ccc01 = _0x434258.data;
        logger.info("Respons Saweria check-payment untuk " + _0x3b1d8a + ": " + JSON.stringify(_0x3ccc01));
        if (_0x3ccc01?.['success'] && _0x3ccc01.data?.['isPaid']) {
          _0x190375.checked = true;
          await updateUserBalance(_0x190375.userId, _0x190375.amount);
          logger.info("SAWERIA QRIS SUKSES user " + _0x190375.userId + " nominal Rp" + _0x190375.amount + ". Saldo diupdate.");
          await prosesBonusTopUp(_0x190375.userId, _0x190375.username, _0x190375.amount);
          logTopup(_0x190375.userId, _0x190375.username, _0x190375.amount, "Saweria");
          const _0x2e2089 = await getUserSaldo(_0x190375.userId);
          const _0xa0d522 = {
            'amount': _0x190375.amount,
            'originalAmount': _0x190375.amount,
            'bonus': _0x190375.bonus || 0x0,
            'bonus_percent': _0x190375.bonus_percent || 0x0,
            'qrMessageId': _0x190375.qrMessageId
          };
          const _0x3d8e79 = await sendPaymentSuccessNotificationByUserId(_0x190375.userId, _0xa0d522, _0x2e2089, _0x190375.username);
          if (_0x3d8e79 && _0x190375.qrMessageId) {
            await bot.telegram.deleteMessage(_0x190375.userId, _0x190375.qrMessageId)["catch"](_0x194a6e => logger.warn("Gagal hapus pesan QR berhasil untuk user " + _0x190375.userId + ": " + _0x194a6e.message));
          }
          delete global.pendingDepositsSaweria[_0x3b1d8a];
        }
      } catch (_0x251c58) {
        logger.error("Cek pembayaran Saweria error untuk " + _0x3b1d8a + ": " + _0x251c58.message);
      }
    }
  } catch (_0x150641) {
    logger.error("❌ ERROR FATAL di polling Saweria:", _0x150641);
  }
}, 0x2710);
bot.command("addserver", async _0x8ecff5 => {
  const _0x2a24d9 = _0x8ecff5.message.from.id;
  if (!ADMIN.includes(_0x2a24d9)) {
    return _0x8ecff5.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  const _0x46332e = _0x8ecff5.message.text.split(" ");
  if (_0x46332e.length !== 0x7) {
    return _0x8ecff5.reply("⚠️ Format salah. Gunakan: `/addserver <domain> <auth> <harga> <nama_server> <quota> <iplimit> <batas_create_account>`", {
      'parse_mode': "Markdown"
    });
  }
  const [_0x384364, _0x4a327a, _0x1f43d1, _0x203c63, _0xb8c1f1, _0x124bb7, _0x2c4b14] = _0x46332e.slice(0x1);
  const _0x155a05 = /^\d+$/;
  if (!_0x155a05.test(_0x1f43d1) || !_0x155a05.test(_0xb8c1f1) || !_0x155a05.test(_0x124bb7) || !_0x155a05.test(_0x2c4b14)) {
    return _0x8ecff5.reply("⚠️ `harga`, `quota`, `iplimit`, dan `batas_create_akun` harus berupa angka.", {
      'parse_mode': "Markdown"
    });
  }
  db.run("INSERT INTO Server (domain, auth, harga, nama_server, quota, iplimit, batas_create_akun) VALUES (?, ?, ?, ?, ?, ?, ?)", [_0x384364, _0x4a327a, parseInt(_0x1f43d1), _0x203c63, parseInt(_0xb8c1f1), parseInt(_0x124bb7), parseInt(_0x2c4b14)], function (_0x3c35df) {
    if (_0x3c35df) {
      logger.error("⚠️ Kesalahan saat menambahkan server:", _0x3c35df.message);
      return _0x8ecff5.reply("⚠️ Kesalahan saat menambahkan server.", {
        'parse_mode': "Markdown"
      });
    }
    _0x8ecff5.reply("✅ Server `" + _0x203c63 + "` berhasil ditambahkan.", {
      'parse_mode': "Markdown"
    });
  });
});
bot.command("editharga", async _0x52d9cf => {
  const _0x5b699f = _0x52d9cf.message.from.id;
  if (!ADMIN.includes(_0x5b699f)) {
    return _0x52d9cf.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  const _0x42072a = _0x52d9cf.message.text.split(" ");
  if (_0x42072a.length !== 0x3) {
    return _0x52d9cf.reply("⚠️ Format salah. Gunakan: `/editharga <domain> <harga>`", {
      'parse_mode': "Markdown"
    });
  }
  const [_0x1ddee1, _0x14bf13] = _0x42072a.slice(0x1);
  if (!/^\d+$/.test(_0x14bf13)) {
    return _0x52d9cf.reply("⚠️ `harga` harus berupa angka.", {
      'parse_mode': "Markdown"
    });
  }
  db.run("UPDATE Server SET harga = ? WHERE domain = ?", [parseInt(_0x14bf13), _0x1ddee1], function (_0x229b2f) {
    if (_0x229b2f) {
      logger.error("⚠️ Kesalahan saat mengedit harga server:", _0x229b2f.message);
      return _0x52d9cf.reply("⚠️ Kesalahan saat mengedit harga server.", {
        'parse_mode': "Markdown"
      });
    }
    if (this.changes === 0x0) {
      return _0x52d9cf.reply("⚠️ Server tidak ditemukan.", {
        'parse_mode': "Markdown"
      });
    }
    _0x52d9cf.reply("✅ Harga server `" + _0x1ddee1 + "` berhasil diubah menjadi `" + _0x14bf13 + '`.', {
      'parse_mode': "Markdown"
    });
  });
});
bot.command("editnama", async _0xc65f59 => {
  const _0x3610ae = _0xc65f59.message.from.id;
  if (!ADMIN.includes(_0x3610ae)) {
    return _0xc65f59.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  const _0xb82abc = _0xc65f59.message.text.split(" ");
  if (_0xb82abc.length !== 0x3) {
    return _0xc65f59.reply("⚠️ Format salah. Gunakan: `/editnama <domain> <nama_server>`", {
      'parse_mode': "Markdown"
    });
  }
  const [_0x16301e, _0x2837d3] = _0xb82abc.slice(0x1);
  db.run("UPDATE Server SET nama_server = ? WHERE domain = ?", [_0x2837d3, _0x16301e], function (_0x335dca) {
    if (_0x335dca) {
      logger.error("⚠️ Kesalahan saat mengedit nama server:", _0x335dca.message);
      return _0xc65f59.reply("⚠️ Kesalahan saat mengedit nama server.", {
        'parse_mode': "Markdown"
      });
    }
    if (this.changes === 0x0) {
      return _0xc65f59.reply("⚠️ Server tidak ditemukan.", {
        'parse_mode': "Markdown"
      });
    }
    _0xc65f59.reply("✅ Nama server `" + _0x16301e + "` berhasil diubah menjadi `" + _0x2837d3 + '`.', {
      'parse_mode': "Markdown"
    });
  });
});
bot.command("editdomain", async _0x342abe => {
  const _0x46c3e4 = _0x342abe.message.from.id;
  if (!ADMIN.includes(_0x46c3e4)) {
    return _0x342abe.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  const _0x455795 = _0x342abe.message.text.split(" ");
  if (_0x455795.length !== 0x3) {
    return _0x342abe.reply("⚠️ Format salah. Gunakan: `/editdomain <old_domain> <new_domain>`", {
      'parse_mode': "Markdown"
    });
  }
  const [_0x54dc8b, _0x1519b1] = _0x455795.slice(0x1);
  db.run("UPDATE Server SET domain = ? WHERE domain = ?", [_0x1519b1, _0x54dc8b], function (_0x47eee6) {
    if (_0x47eee6) {
      logger.error("⚠️ Kesalahan saat mengedit domain server:", _0x47eee6.message);
      return _0x342abe.reply("⚠️ Kesalahan saat mengedit domain server.", {
        'parse_mode': "Markdown"
      });
    }
    if (this.changes === 0x0) {
      return _0x342abe.reply("⚠️ Server tidak ditemukan.", {
        'parse_mode': "Markdown"
      });
    }
    _0x342abe.reply("✅ Domain server `" + _0x54dc8b + "` berhasil diubah menjadi `" + _0x1519b1 + '`.', {
      'parse_mode': "Markdown"
    });
  });
});
bot.command('editauth', async _0x3b6b22 => {
  const _0x1076c2 = _0x3b6b22.message.from.id;
  if (!ADMIN.includes(_0x1076c2)) {
    return _0x3b6b22.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  const _0x5b4f84 = _0x3b6b22.message.text.split(" ");
  if (_0x5b4f84.length !== 0x3) {
    return _0x3b6b22.reply("⚠️ Format salah. Gunakan: `/editauth <domain> <auth>`", {
      'parse_mode': "Markdown"
    });
  }
  const [_0xf202ef, _0x20aee1] = _0x5b4f84.slice(0x1);
  db.run("UPDATE Server SET auth = ? WHERE domain = ?", [_0x20aee1, _0xf202ef], function (_0x251acc) {
    if (_0x251acc) {
      logger.error("⚠️ Kesalahan saat mengedit auth server:", _0x251acc.message);
      return _0x3b6b22.reply("⚠️ Kesalahan saat mengedit auth server.", {
        'parse_mode': 'Markdown'
      });
    }
    if (this.changes === 0x0) {
      return _0x3b6b22.reply("⚠️ Server tidak ditemukan.", {
        'parse_mode': "Markdown"
      });
    }
    _0x3b6b22.reply("✅ Auth server `" + _0xf202ef + "` berhasil diubah menjadi `" + _0x20aee1 + '`.', {
      'parse_mode': "Markdown"
    });
  });
});
bot.command("editlimitquota", async _0x2a8fa4 => {
  const _0x3c69ed = _0x2a8fa4.message.from.id;
  if (!ADMIN.includes(_0x3c69ed)) {
    return _0x2a8fa4.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  const _0x5d6c33 = _0x2a8fa4.message.text.split(" ");
  if (_0x5d6c33.length !== 0x3) {
    return _0x2a8fa4.reply("⚠️ Format salah. Gunakan: `/editlimitquota <domain> <quota>`", {
      'parse_mode': "Markdown"
    });
  }
  const [_0x25912c, _0x36dd35] = _0x5d6c33.slice(0x1);
  if (!/^\d+$/.test(_0x36dd35)) {
    return _0x2a8fa4.reply("⚠️ `quota` harus berupa angka.", {
      'parse_mode': "Markdown"
    });
  }
  db.run("UPDATE Server SET quota = ? WHERE domain = ?", [parseInt(_0x36dd35), _0x25912c], function (_0x578661) {
    if (_0x578661) {
      logger.error("⚠️ Kesalahan saat mengedit quota server:", _0x578661.message);
      return _0x2a8fa4.reply("⚠️ Kesalahan saat mengedit quota server.", {
        'parse_mode': "Markdown"
      });
    }
    if (this.changes === 0x0) {
      return _0x2a8fa4.reply("⚠️ Server tidak ditemukan.", {
        'parse_mode': "Markdown"
      });
    }
    _0x2a8fa4.reply("✅ Quota server `" + _0x25912c + "` berhasil diubah menjadi `" + _0x36dd35 + '`.', {
      'parse_mode': "Markdown"
    });
  });
});
bot.command("editlimitip", async _0xb550e4 => {
  const _0x554643 = _0xb550e4.message.from.id;
  if (!ADMIN.includes(_0x554643)) {
    return _0xb550e4.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  const _0x1c2892 = _0xb550e4.message.text.split(" ");
  if (_0x1c2892.length !== 0x3) {
    return _0xb550e4.reply("⚠️ Format salah. Gunakan: `/editlimitip <domain> <iplimit>`", {
      'parse_mode': "Markdown"
    });
  }
  const [_0x1d3644, _0x4c6394] = _0x1c2892.slice(0x1);
  if (!/^\d+$/.test(_0x4c6394)) {
    return _0xb550e4.reply("⚠️ `iplimit` harus berupa angka.", {
      'parse_mode': "Markdown"
    });
  }
  db.run("UPDATE Server SET iplimit = ? WHERE domain = ?", [parseInt(_0x4c6394), _0x1d3644], function (_0x56e523) {
    if (_0x56e523) {
      logger.error("⚠️ Kesalahan saat mengedit iplimit server:", _0x56e523.message);
      return _0xb550e4.reply("⚠️ Kesalahan saat mengedit iplimit server.", {
        'parse_mode': 'Markdown'
      });
    }
    if (this.changes === 0x0) {
      return _0xb550e4.reply("⚠️ Server tidak ditemukan.", {
        'parse_mode': 'Markdown'
      });
    }
    _0xb550e4.reply("✅ Iplimit server `" + _0x1d3644 + "` berhasil diubah menjadi `" + _0x4c6394 + '`.', {
      'parse_mode': "Markdown"
    });
  });
});
bot.command("editlimitcreate", async _0x3d700c => {
  const _0x282fe0 = _0x3d700c.message.from.id;
  if (!ADMIN.includes(_0x282fe0)) {
    return _0x3d700c.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  const _0xa36ada = _0x3d700c.message.text.split(" ");
  if (_0xa36ada.length !== 0x3) {
    return _0x3d700c.reply("⚠️ Format salah. Gunakan: `/editlimitcreate <domain> <batas_create_akun>`", {
      'parse_mode': "Markdown"
    });
  }
  const [_0x3d7520, _0x354914] = _0xa36ada.slice(0x1);
  if (!/^\d+$/.test(_0x354914)) {
    return _0x3d700c.reply("⚠️ `batas_create_akun` harus berupa angka.", {
      'parse_mode': "Markdown"
    });
  }
  db.run("UPDATE Server SET batas_create_akun = ? WHERE domain = ?", [parseInt(_0x354914), _0x3d7520], function (_0x132c14) {
    if (_0x132c14) {
      logger.error("⚠️ Kesalahan saat mengedit batas_create_akun server:", _0x132c14.message);
      return _0x3d700c.reply("⚠️ Kesalahan saat mengedit batas_create_akun server.", {
        'parse_mode': "Markdown"
      });
    }
    if (this.changes === 0x0) {
      return _0x3d700c.reply("⚠️ Server tidak ditemukan.", {
        'parse_mode': "Markdown"
      });
    }
    _0x3d700c.reply("✅ Batas create akun server `" + _0x3d7520 + "` berhasil diubah menjadi `" + _0x354914 + '`.', {
      'parse_mode': "Markdown"
    });
  });
});
bot.command("edittotalcreate", async _0x401420 => {
  const _0x4fb16c = _0x401420.message.from.id;
  if (!ADMIN.includes(_0x4fb16c)) {
    return _0x401420.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  const _0x384861 = _0x401420.message.text.split(" ");
  if (_0x384861.length !== 0x3) {
    return _0x401420.reply("⚠️ Format salah. Gunakan: `/edittotalcreate <domain> <total_create_akun>`", {
      'parse_mode': "Markdown"
    });
  }
  const [_0x40e3dd, _0x1e3bf8] = _0x384861.slice(0x1);
  if (!/^\d+$/.test(_0x1e3bf8)) {
    return _0x401420.reply("⚠️ `total_create_akun` harus berupa angka.", {
      'parse_mode': "Markdown"
    });
  }
  db.run("UPDATE Server SET total_create_akun = ? WHERE domain = ?", [parseInt(_0x1e3bf8), _0x40e3dd], function (_0x1b06e2) {
    if (_0x1b06e2) {
      logger.error("⚠️ Kesalahan saat mengedit total_create_akun server:", _0x1b06e2.message);
      return _0x401420.reply("⚠️ Kesalahan saat mengedit total_create_akun server.", {
        'parse_mode': "Markdown"
      });
    }
    if (this.changes === 0x0) {
      return _0x401420.reply("⚠️ Server tidak ditemukan.", {
        'parse_mode': "Markdown"
      });
    }
    _0x401420.reply("✅ Total create akun server `" + _0x40e3dd + "` berhasil diubah menjadi `" + _0x1e3bf8 + '`.', {
      'parse_mode': 'Markdown'
    });
  });
});
async function handleServiceAction(_0x4fcaea, _0x18ec5e) {
  let _0x2a12ae;
  if (_0x18ec5e === "trial") {
    _0x2a12ae = [[{
      'text': "💠 SSH",
      'callback_data': "trial_ssh"
    }], [{
      'text': "💠 Vmess",
      'callback_data': "trial_vmess"
    }, {
      'text': "💠 Vless",
      'callback_data': "trial_vless"
    }], [{
      'text': "💠 Trojan",
      'callback_data': "trial_trojan"
    }, {
      'text': "💠 Shadowsocks",
      'callback_data': "trial_shadowsocks"
    }], [{
      'text': "🔙 Kembali",
      'callback_data': "send_main_menu"
    }]];
  } else {
    if (_0x18ec5e === 'create') {
      _0x2a12ae = [[{
        'text': "✨ SSH",
        'callback_data': 'create_ssh'
      }], [{
        'text': "✨ Vmess",
        'callback_data': "create_vmess"
      }, {
        'text': "✨ Vless",
        'callback_data': "create_vless"
      }], [{
        'text': "✨ Trojan",
        'callback_data': "create_trojan"
      }, {
        'text': "✨ Shadowsocks",
        'callback_data': "create_shadowsocks"
      }], [{
        'text': "🔙 Kembali",
        'callback_data': "send_main_menu"
      }]];
    } else {
      if (_0x18ec5e === "sewascript") {
        _0x2a12ae = [[{
          'text': "🥇 Regist IP",
          'callback_data': "sewascript_daftar"
        }, {
          'text': "🥈 Renew IP",
          'callback_data': "sewascript_perpanjang"
        }], [{
          'text': "🔙 Kembali",
          'callback_data': "send_main_menu"
        }]];
      } else if (_0x18ec5e === 'renew') {
        _0x2a12ae = [[{
          'text': "♻️ SSH",
          'callback_data': "renew_ssh"
        }], [{
          'text': "♻️ Vmess",
          'callback_data': "renew_vmess"
        }, {
          'text': "♻️ Vless",
          'callback_data': "renew_vless"
        }], [{
          'text': "♻️ Trojan",
          'callback_data': "renew_trojan"
        }, {
          'text': "♻️ Shadowsocks",
          'callback_data': "renew_shadowsocks"
        }], [{
          'text': "🔙 Kembali",
          'callback_data': "send_main_menu"
        }]];
      }
    }
  }
  try {
    await _0x4fcaea.editMessageReplyMarkup({
      'inline_keyboard': _0x2a12ae
    });
    logger.info(_0x18ec5e + " service menu sent");
  } catch (_0x4e53e9) {
    if (_0x4e53e9.response && _0x4e53e9.response.error_code === 0x190) {
      await _0x4fcaea.reply("Pilih jenis layanan yang ingin Anda " + _0x18ec5e + ':', {
        'reply_markup': {
          'inline_keyboard': _0x2a12ae
        }
      });
      logger.info(_0x18ec5e + " service menu sent as new message");
    } else {
      logger.error("Error saat mengirim menu " + _0x18ec5e + ':', _0x4e53e9);
    }
  }
}
function loadButtonConfig() {
  try {
    return JSON.parse(fs.readFileSync("./button_config.json", 'utf8'));
  } catch (_0x1cea58) {
    return {
      'topup_saldo': true,
      'topup_saweria': true
    };
  }
}
function saveButtonConfig(_0x25199e) {
  fs.writeFileSync("./button_config.json", JSON.stringify(_0x25199e, null, 0x2));
}
bot.action("toggle_topup_saldo", async _0x107662 => {
  await _0x107662.answerCbQuery();
  const _0x4ed863 = loadButtonConfig();
  _0x4ed863.topup_saldo = !_0x4ed863.topup_saldo;
  saveButtonConfig(_0x4ed863);
  await sendAdminMenu(_0x107662);
});
bot.action("toggle_topup_saweria", async _0x3ddbc1 => {
  await _0x3ddbc1.answerCbQuery();
  const _0x37ea7b = loadButtonConfig();
  _0x37ea7b.topup_saweria = !_0x37ea7b.topup_saweria;
  saveButtonConfig(_0x37ea7b);
  await sendAdminMenu(_0x3ddbc1);
});
bot.action(/^toggle_trial_btn_(on|off)$/, async _0x4b1455 => {
  try {
    const _0xa2254d = _0x4b1455.match || [];
    const _0x7225b2 = _0xa2254d[0x1];
    console.log("Toggle tombol trial: " + _0x4b1455.from.id + " ingin " + _0x7225b2);
    if (!ADMIN.includes(_0x4b1455.from.id)) {
      return;
    }
    const _0x16d355 = _0x7225b2 === 'on' ? 0x1 : 0x0;
    db.run("UPDATE ui_config SET show_trial_button = ? WHERE id = 1", [_0x16d355], async _0x5b76e0 => {
      if (_0x5b76e0) {
        logger.error("❌ Gagal update tombol trial:", _0x5b76e0.message);
        return await _0x4b1455.answerCbQuery("❌ Gagal mengubah status.");
      }
      await _0x4b1455.answerCbQuery("✅ Status tombol trial diperbarui.");
      try {
        await _0x4b1455.telegram.deleteMessage(_0x4b1455.chat.id, _0x4b1455.callbackQuery.message.message_id);
      } catch (_0x212e82) {}
      await sendAdminMenu(_0x4b1455);
    });
  } catch (_0x39aac1) {
    logger.error("❌ ERROR toggle_trial_btn:", _0x39aac1.message);
    await _0x4b1455.answerCbQuery("❌ Terjadi kesalahan.");
  }
});
bot.action(/toggle_sewascript_btn_(on|off)/, async _0x2f10f1 => {
  const _0x3bfd60 = _0x2f10f1.match[0x1];
  const _0xac938f = _0x3bfd60 === 'on' ? 0x1 : 0x0;
  db.run("UPDATE ui_config SET show_sewa_script_button = ? WHERE id = 1", [_0xac938f], function (_0x5b77d3) {
    if (_0x5b77d3) {
      logger.error("❌ Gagal update show_sewa_script_button:", _0x5b77d3.message);
      return _0x2f10f1.answerCbQuery("Gagal mengubah status tombol.");
    }
    logger.info("✅ Tombol Sewa Script diubah ke " + (_0xac938f === 0x1 ? 'ON' : "OFF"));
    _0x2f10f1.answerCbQuery("Tombol Sewa Script " + (_0xac938f === 0x1 ? "diaktifkan ✅" : "dinonaktifkan ❌"));
    return sendAdminMenu(_0x2f10f1);
  });
});
async function sendAdminMenu(_0x129ce6) {
  const _0x9ca4ed = loadButtonConfig();
  const _0x5afb8b = _0x129ce6.from.id;
  const _0x45ce90 = _0x129ce6.chat.id;
  const _0x19cce9 = await new Promise(_0x22096d => {
    db.get("SELECT show_trial_button FROM ui_config WHERE id = 1", (_0x459270, _0xceec29) => {
      if (_0x459270) {
        logger.error("❌ Gagal ambil show_trial_button:", _0x459270.message);
        return _0x22096d(0x1);
      }
      if (!_0xceec29) {
        logger.warn("⚠️ Row kosong untuk show_trial_button!");
        return _0x22096d(0x1);
      }
      logger.debug("✅ show_trial_button: " + _0xceec29.show_trial_button);
      _0x22096d(_0xceec29.show_trial_button === 0x1 ? 0x1 : 0x0);
    });
  });
  const _0x5c2e85 = await new Promise(_0x5dec79 => {
    db.get("SELECT show_sewa_script_button FROM ui_config WHERE id = 1", (_0x28ff51, _0x3e0b4a) => {
      if (_0x28ff51) {
        logger.error("❌ Gagal ambil show_sewa_script_button:", _0x28ff51.message);
        return _0x5dec79(0x1);
      }
      if (!_0x3e0b4a) {
        logger.warn("⚠️ Row kosong untuk show_sewa_script_button!");
        return _0x5dec79(0x1);
      }
      logger.debug("✅ show_sewa_script_button: " + _0x3e0b4a.show_sewa_script_button);
      _0x5dec79(_0x3e0b4a.show_sewa_script_button === 0x1 ? 0x1 : 0x0);
    });
  });
  const _0x47949b = [[{
    'text': "✏️ Tambah Server",
    'callback_data': 'addserver'
  }, {
    'text': "❌ Hapus Server",
    'callback_data': "deleteserver"
  }], [{
    'text': "💲 Edit Harga",
    'callback_data': "editserver_harga"
  }, {
    'text': "📝 Edit Nama",
    'callback_data': "nama_server_edit"
  }], [{
    'text': "🌐 Edit Domain",
    'callback_data': "editserver_domain"
  }, {
    'text': "🔑 Edit Auth",
    'callback_data': "editserver_auth"
  }], [{
    'text': "📊 Edit Quota",
    'callback_data': "editserver_quota"
  }, {
    'text': "📶 Edit Limit IP",
    'callback_data': "editserver_limit_ip"
  }], [{
    'text': "🔢 Edit Batas Create",
    'callback_data': "editserver_batas_create_akun"
  }, {
    'text': "🔢 Edit Total Create",
    'callback_data': "editserver_total_create_akun"
  }], [{
    'text': "💵 Tambah Saldo",
    'callback_data': "addsaldo_user"
  }, {
    'text': "📋 List Server",
    'callback_data': 'listserver'
  }], [{
    'text': "♻️ Reset Server",
    'callback_data': "resetdb"
  }, {
    'text': "ℹ️ Detail Server",
    'callback_data': "detailserver"
  }], [{
    'text': "🎁 Set Bonus TopUp",
    'callback_data': "bonus_topup_setting"
  }, {
    'text': "📜 Log Bonus TopUp",
    'callback_data': "log_bonus_topup"
  }], [{
    'text': (_0x9ca4ed.topup_saldo ? '✅' : '❌') + " Topup QRIS Orkut",
    'callback_data': "toggle_topup_saldo"
  }, {
    'text': (_0x9ca4ed.topup_saweria ? '✅' : '❌') + " Topup QRIS Saweria",
    'callback_data': "toggle_topup_saweria"
  }], [{
    'text': (_0x19cce9 ? '✅' : '❌') + " Tombol Trial",
    'callback_data': "toggle_trial_btn_" + (_0x19cce9 ? "off" : 'on')
  }, {
    'text': (_0x5c2e85 ? '✅' : '❌') + " Tombol Sewa Script",
    'callback_data': "toggle_sewascript_btn_" + (_0x5c2e85 ? "off" : 'on')
  }], [{
    'text': "📈 Hasil Penjualan",
    'callback_data': "statistik_penjualan"
  }, {
    'text': "📑 Log Topup",
    'callback_data': "log_topup"
  }], [{
    'text': "👥 List Reseller",
    'callback_data': "listreseller"
  }], [{
    'text': "🔙 Kembali",
    'callback_data': "send_main_menu"
  }]];
  if (typeof lastMenus !== "undefined" && lastMenus[_0x5afb8b]) {
    try {
      await _0x129ce6.telegram.deleteMessage(_0x45ce90, lastMenus[_0x5afb8b]);
    } catch (_0x3fe879) {}
    delete lastMenus[_0x5afb8b];
  }
  if (_0x129ce6.updateType === "callback_query") {
    try {
      const _0x40fd2d = await _0x129ce6.editMessageText("\n━━━━━━━━━━━━━━━━━━━━━━\n      🏷️ *≡ MENU ADMIN VPN ≡* 🏷️\n━━━━━━━━━━━━━━━━━━━━━━\n💸 *» Pilih Menu Admin Dibawah Ini:*", {
        'parse_mode': 'Markdown',
        'reply_markup': {
          'inline_keyboard': _0x47949b
        }
      });
      if (_0x40fd2d?.["message_id"] && typeof lastMenus !== "undefined") {
        lastMenus[_0x5afb8b] = _0x40fd2d.message_id;
      }
      return _0x40fd2d;
    } catch (_0x2b2136) {}
  }
  const _0x2a3644 = await _0x129ce6.reply("\n━━━━━━━━━━━━━━━━━━━━━━\n      🏷️ *≡ MENU ADMIN VPN ≡* 🏷️\n━━━━━━━━━━━━━━━━━━━━━━\n💸 *» Pilih Menu Admin Dibawah Ini:*", {
    'parse_mode': "Markdown",
    'reply_markup': {
      'inline_keyboard': _0x47949b
    }
  });
  if (_0x2a3644?.["message_id"] && typeof lastMenus !== "undefined") {
    lastMenus[_0x5afb8b] = _0x2a3644.message_id;
  }
  return _0x2a3644;
}
bot.action("sewascript_daftar", async _0x23eafd => {
  try {
    await _0x23eafd.deleteMessage();
  } catch (_0x32ed41) {
    console.warn("Gagal menghapus pesan sebelumnya:", _0x32ed41.message);
  }
  userState[_0x23eafd.from.id] = {
    'step': "sewascript_daftar_pilih_bulan"
  };
  await _0x23eafd.reply("📅 Pilih Durasi Sewa Script:", {
    'reply_markup': {
      'inline_keyboard': [[{
        'text': "1 Bulan 10K",
        'callback_data': "daftar_1bln"
      }, {
        'text': "2 Bulan 20K",
        'callback_data': "daftar_2bln"
      }, {
        'text': "3 Bulan 30K",
        'callback_data': "daftar_3bln"
      }], [{
        'text': "🔙 Kembali",
        'callback_data': "service_sewascript"
      }]]
    }
  });
});
bot.action("sewascript_perpanjang", async _0x75ab0 => {
  try {
    await _0x75ab0.deleteMessage();
  } catch (_0x81fc2b) {
    console.warn("Gagal menghapus pesan sebelumnya:", _0x81fc2b.message);
  }
  userState[_0x75ab0.from.id] = {
    'step': "sewascript_perpanjang_pilih_bulan"
  };
  await _0x75ab0.reply("📅 Pilih Durasi Perpanjangan Script:", {
    'reply_markup': {
      'inline_keyboard': [[{
        'text': "1 Bulan 10K",
        'callback_data': "perpanjang_1bln"
      }, {
        'text': "2 Bulan 20K",
        'callback_data': "perpanjang_2bln"
      }, {
        'text': "3 Bulan 30K",
        'callback_data': "perpanjang_3bln"
      }], [{
        'text': "🔙 Kembali",
        'callback_data': "service_sewascript"
      }]]
    }
  });
});
bot.action(/^daftar_(\d+)bln$/, async _0x4f58bf => {
  try {
    await _0x4f58bf.deleteMessage();
  } catch (_0x43e90e) {
    console.warn("Gagal hapus pesan tombol:", _0x43e90e.message);
  }
  const _0x4eeea2 = parseInt(_0x4f58bf.match[0x1]);
  userState[_0x4f58bf.from.id] = {
    'step': "sewascript_create_input",
    'bulan': _0x4eeea2
  };
  await _0x4f58bf.reply("♂️ *Masukkan username:*", {
    'parse_mode': "Markdown"
  });
});
bot.action(/^perpanjang_(\d+)bln$/, async _0x242b42 => {
  try {
    await _0x242b42.deleteMessage();
  } catch (_0xbcc500) {
    console.warn("Gagal hapus pesan tombol:", _0xbcc500.message);
  }
  const _0x595159 = parseInt(_0x242b42.match[0x1]);
  userState[_0x242b42.from.id] = {
    'step': "sewascript_perpanjang_ip_manual",
    'bulan': _0x595159
  };
  await _0x242b42.reply("🌀 *Masukkan IP yang ingin diperpanjang:*", {
    'parse_mode': "Markdown"
  });
});
bot.action("service_sewascript", async _0x63b765 => {
  try {
    await _0x63b765.answerCbQuery();
  } catch (_0x67b4ce) {
    logger.warn("answerCbQuery error:", _0x67b4ce.message);
  }
  if (!_0x63b765) {
    return _0x63b765.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': 'Markdown'
    });
  }
  await handleServiceAction(_0x63b765, 'sewascript');
});
bot.action("toggle_sewascript_button", async _0xd983c1 => {
  const _0x27d19d = _0xd983c1.from.id;
  if (!ADMIN.includes(_0x27d19d)) {
    return _0xd983c1.answerCbQuery("❌ Tidak diizinkan", {
      'show_alert': true
    });
  }
  db.get("SELECT show_sewa_script_button FROM ui_config WHERE id = 1", (_0x294105, _0x4acf2d) => {
    if (_0x294105) {
      logger.error("❌ Gagal baca tombol sewa script:", _0x294105.message);
      return _0xd983c1.answerCbQuery("⚠️ Gagal membaca status", {
        'show_alert': true
      });
    }
    const _0x6d4ca5 = _0x4acf2d?.["show_sewa_script_button"] === 0x1;
    const _0x500371 = _0x6d4ca5 ? 0x0 : 0x1;
    db.run("UPDATE ui_config SET show_sewa_script_button = ? WHERE id = 1", [_0x500371], _0x156134 => {
      if (_0x156134) {
        logger.error("❌ Gagal update tombol sewa script:", _0x156134.message);
        return _0xd983c1.answerCbQuery("⚠️ Gagal mengubah status", {
          'show_alert': true
        });
      }
      const _0x59ce10 = _0x500371 === 0x1 ? "✅ Diaktifkan" : "🚫 Dinonaktifkan";
      _0xd983c1.answerCbQuery("📜 Tombol Sewa Script " + _0x59ce10, {
        'show_alert': true
      });
    });
  });
});
bot.action("service_create", async _0x1aa795 => {
  if (!_0x1aa795 || !_0x1aa795.match) {
    return _0x1aa795.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': 'Markdown'
    });
  }
  await handleServiceAction(_0x1aa795, 'create');
});
bot.action('trial_ssh', async _0x1ecf1b => {
  if (!_0x1ecf1b || !_0x1ecf1b.match) {
    return _0x1ecf1b.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': "Markdown"
    });
  }
  await startSelectServer(_0x1ecf1b, "trial", 'ssh');
});
bot.action("trial_vmess", async _0x1ebaba => {
  if (!_0x1ebaba || !_0x1ebaba.match) {
    return _0x1ebaba.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': "Markdown"
    });
  }
  await startSelectServer(_0x1ebaba, "trial", 'vmess');
});
bot.action("trial_vless", async _0x20b705 => {
  if (!_0x20b705 || !_0x20b705.match) {
    return _0x20b705.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': "Markdown"
    });
  }
  await startSelectServer(_0x20b705, 'trial', "vless");
});
bot.action("trial_trojan", async _0x1e7c06 => {
  if (!_0x1e7c06 || !_0x1e7c06.match) {
    return _0x1e7c06.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': "Markdown"
    });
  }
  await startSelectServer(_0x1e7c06, "trial", "trojan");
});
bot.action("trial_shadowsocks", async _0x1dd2d9 => {
  if (!_0x1dd2d9 || !_0x1dd2d9.match) {
    return _0x1dd2d9.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': "Markdown"
    });
  }
  await startSelectServer(_0x1dd2d9, "trial", "shadowsocks");
});
bot.action("service_trial", async _0x46a6c7 => {
  if (!_0x46a6c7 || !_0x46a6c7.match) {
    return _0x46a6c7.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': 'Markdown'
    });
  }
  await handleServiceAction(_0x46a6c7, 'trial');
});
bot.action("service_renew", async _0x44dbbc => {
  if (!_0x44dbbc || !_0x44dbbc.match) {
    return _0x44dbbc.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': 'Markdown'
    });
  }
  await handleServiceAction(_0x44dbbc, "renew");
});
bot.action("send_main_menu", async _0x4dec61 => {
  const _0x41740b = _0x4dec61.from.id;
  const _0x2282d1 = _0x4dec61.chat.id;
  try {
    await _0x4dec61.answerCbQuery();
    if (lastMenus[_0x41740b]) {
      try {
        await _0x4dec61.telegram.deleteMessage(_0x2282d1, lastMenus[_0x41740b]);
      } catch (_0x22e3fd) {
        console.warn("⚠️ Gagal hapus menu lama dari " + _0x41740b + ':', _0x22e3fd.message);
      }
    }
    const _0x5266f4 = await sendMainMenu(_0x4dec61);
    if (_0x5266f4?.['message_id']) {
      lastMenus[_0x41740b] = _0x5266f4.message_id;
    }
  } catch (_0x179a62) {
    logger.error("❌ Gagal handle send_main_menu:", _0x179a62.message);
    await _0x4dec61.reply("❌ *Gagal memproses menu utama.*", {
      'parse_mode': "Markdown"
    });
  }
});
bot.action("create_vmess", async _0x83ae2d => {
  if (!_0x83ae2d || !_0x83ae2d.match) {
    return _0x83ae2d.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': "Markdown"
    });
  }
  await startSelectServer(_0x83ae2d, "create", "vmess");
});
bot.action("create_vless", async _0x2384b3 => {
  if (!_0x2384b3 || !_0x2384b3.match) {
    return _0x2384b3.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': "Markdown"
    });
  }
  await startSelectServer(_0x2384b3, "create", "vless");
});
bot.action("create_trojan", async _0x53c480 => {
  if (!_0x53c480 || !_0x53c480.match) {
    return _0x53c480.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': "Markdown"
    });
  }
  await startSelectServer(_0x53c480, "create", "trojan");
});
bot.action("create_shadowsocks", async _0xc1163a => {
  if (!_0xc1163a || !_0xc1163a.match) {
    return _0xc1163a.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': "Markdown"
    });
  }
  await startSelectServer(_0xc1163a, "create", "shadowsocks");
});
bot.action("create_ssh", async _0x20f3b5 => {
  if (!_0x20f3b5 || !_0x20f3b5.match) {
    return _0x20f3b5.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': "Markdown"
    });
  }
  await startSelectServer(_0x20f3b5, "create", 'ssh');
});
bot.action("renew_vmess", async _0x227acc => {
  if (!_0x227acc || !_0x227acc.match) {
    return _0x227acc.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': 'Markdown'
    });
  }
  await startSelectServer(_0x227acc, "renew", 'vmess');
});
bot.action("renew_vless", async _0x2268be => {
  if (!_0x2268be || !_0x2268be.match) {
    return _0x2268be.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': "Markdown"
    });
  }
  await startSelectServer(_0x2268be, "renew", "vless");
});
bot.action("renew_trojan", async _0x512941 => {
  if (!_0x512941 || !_0x512941.match) {
    return _0x512941.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': "Markdown"
    });
  }
  await startSelectServer(_0x512941, "renew", "trojan");
});
bot.action("renew_shadowsocks", async _0x1f5f4c => {
  if (!_0x1f5f4c || !_0x1f5f4c.match) {
    return _0x1f5f4c.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': "Markdown"
    });
  }
  await startSelectServer(_0x1f5f4c, "renew", "shadowsocks");
});
bot.action("renew_ssh", async _0x84f222 => {
  if (!_0x84f222 || !_0x84f222.match) {
    return _0x84f222.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': "Markdown"
    });
  }
  await startSelectServer(_0x84f222, "renew", "ssh");
});
async function startSelectServer(_0x302fef, _0x5b638c, _0x4592f1, _0x3ba655 = 0x0) {
  try {
    logger.info("Memulai proses " + _0x5b638c + " untuk " + _0x4592f1 + " di halaman " + (_0x3ba655 + 0x1));
    const _0x4874aa = _0x302fef.from.id;
    const _0x56c72e = await new Promise((_0x253c0e, _0x581189) => {
      db.get("SELECT role FROM users WHERE user_id = ?", [_0x4874aa], (_0x42a026, _0xc9ea85) => {
        if (_0x42a026) {
          _0x581189(_0x42a026);
        } else {
          _0x253c0e(_0xc9ea85 ? _0xc9ea85.role : 'member');
        }
      });
    });
    let _0x415c2a = 0x0;
    if (_0x56c72e === "reseller") {
      _0x415c2a = await new Promise((_0x31e92e, _0x57bf44) => {
        db.get("SELECT discount_percent FROM reseller_config WHERE id = 1", (_0x5a7b4d, _0x4c2af6) => {
          if (_0x5a7b4d) {
            _0x57bf44(_0x5a7b4d);
          } else {
            _0x31e92e(_0x4c2af6 ? _0x4c2af6.discount_percent : 0x0);
          }
        });
      });
    }
    db.all("SELECT * FROM Server", [], (_0x39f034, _0x210c8c) => {
      if (_0x39f034) {
        logger.error("⚠️ Error fetching servers:", _0x39f034.message);
        return _0x302fef.reply("⚠️ *PERHATIAN!* Tidak ada server yang tersedia saat ini. Coba lagi nanti!", {
          'parse_mode': "Markdown"
        });
      }
      if (_0x210c8c.length === 0x0) {
        logger.info("Tidak ada server yang tersedia");
        return _0x302fef.reply("⚠️ *PERHATIAN!* Tidak ada server yang tersedia saat ini. Coba lagi nanti!", {
          'parse_mode': "Markdown"
        });
      }
      const _0x55d078 = Math.ceil(_0x210c8c.length / 0x6);
      const _0xb5a5b7 = Math.min(Math.max(_0x3ba655, 0x0), _0x55d078 - 0x1);
      const _0x32bf2e = _0xb5a5b7 * 0x6;
      const _0x6a1ffb = _0x32bf2e + 0x6;
      const _0x2bd458 = _0x210c8c.slice(_0x32bf2e, _0x6a1ffb);
      const _0x123765 = [];
      for (let _0x11ed78 = 0x0; _0x11ed78 < _0x2bd458.length; _0x11ed78 += 0x2) {
        const _0x2b8fcc = [];
        const _0x453899 = _0x2bd458[_0x11ed78];
        const _0x105624 = _0x2bd458[_0x11ed78 + 0x1];
        const _0x378e19 = '' + _0x453899.nama_server;
        _0x2b8fcc.push({
          'text': _0x378e19,
          'callback_data': _0x5b638c + "_username_" + _0x4592f1 + '_' + _0x453899.id
        });
        if (_0x105624) {
          const _0x1f1940 = '' + _0x105624.nama_server;
          _0x2b8fcc.push({
            'text': _0x1f1940,
            'callback_data': _0x5b638c + "_username_" + _0x4592f1 + '_' + _0x105624.id
          });
        }
        _0x123765.push(_0x2b8fcc);
      }
      if (_0x5b638c === "trial") {
        userState[_0x302fef.chat.id] = {
          'step': "execute_trial_" + _0x4592f1,
          'page': _0xb5a5b7,
          'serverId': null
        };
      } else {
        userState[_0x302fef.chat.id] = {
          'step': _0x5b638c + "_username_" + _0x4592f1,
          'page': _0xb5a5b7
        };
      }
      const _0x283b8e = [];
      if (_0x55d078 > 0x1) {
        if (_0xb5a5b7 > 0x0) {
          _0x283b8e.push({
            'text': "⬅️ Back",
            'callback_data': "navigate_" + _0x5b638c + '_' + _0x4592f1 + '_' + (_0xb5a5b7 - 0x1)
          });
        }
        if (_0xb5a5b7 < _0x55d078 - 0x1) {
          _0x283b8e.push({
            'text': "➡️ Next",
            'callback_data': "navigate_" + _0x5b638c + '_' + _0x4592f1 + '_' + (_0xb5a5b7 + 0x1)
          });
        }
      }
      if (_0x283b8e.length > 0x0) {
        _0x123765.push(_0x283b8e);
      }
      _0x123765.push([{
        'text': "🔙 Kembali ke Menu Utama",
        'callback_data': "send_main_menu"
      }]);
      const _0x3651e1 = _0x2bd458.map(_0xbf686 => {
        let _0x14760a = _0xbf686.harga;
        if (_0x56c72e === "reseller" && _0x415c2a > 0x0) {
          _0x14760a = Math.floor(_0xbf686.harga * (0x64 - _0x415c2a) / 0x64);
        }
        const _0x48415d = _0x14760a * 0x1e;
        const _0x489a1e = _0xbf686.total_create_akun >= _0xbf686.batas_create_akun;
        return "🌐 *" + _0xbf686.nama_server + "*\n" + ("💰 Harga per hari: Rp" + _0x14760a + "\n") + ("📅 Harga per 30 hari: Rp" + _0x48415d + "\n") + ("📊 Quota: " + _0xbf686.quota + "GB\n") + ("🔢 Limit IP: " + _0xbf686.iplimit + " IP\n") + (_0x489a1e ? "⚠️ *Server Penuh*" : "👥 Total Create Akun: " + _0xbf686.total_create_akun + '/' + _0xbf686.batas_create_akun);
      }).join("\n\n");
      if (_0x302fef.updateType === "callback_query") {
        _0x302fef.editMessageText("📋 *List Server (Halaman " + (_0xb5a5b7 + 0x1) + " dari " + _0x55d078 + "):*\n\n" + _0x3651e1, {
          'reply_markup': {
            'inline_keyboard': _0x123765
          },
          'parse_mode': "Markdown"
        });
      } else {
        _0x302fef.reply("📋 *List Server (Halaman " + (_0xb5a5b7 + 0x1) + " dari " + _0x55d078 + "):*\n\n" + _0x3651e1, {
          'reply_markup': {
            'inline_keyboard': _0x123765
          },
          'parse_mode': "Markdown"
        });
      }
      userState[_0x302fef.chat.id] = {
        'step': _0x5b638c + "_username_" + _0x4592f1,
        'page': _0xb5a5b7
      };
    });
  } catch (_0x1d3ffc) {
    logger.error("❌ Error saat memulai proses " + _0x5b638c + " untuk " + _0x4592f1 + ':', _0x1d3ffc);
    await _0x302fef.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.", {
      'parse_mode': "Markdown"
    });
  }
}
bot.command("unlimitedtrial", async _0x501a87 => {
  const _0x315728 = _0x501a87.from.id;
  if (!ADMIN.includes(_0x315728)) {
    return _0x501a87.reply("❌ Anda tidak memiliki izin.");
  }
  const _0x5d54b9 = _0x501a87.message.text.split(" ");
  if (_0x5d54b9.length !== 0x2 || isNaN(_0x5d54b9[0x1])) {
    return _0x501a87.reply("⚠️ Format salah. Gunakan: /unlimitedtrial <user_id>");
  }
  const _0x327b41 = parseInt(_0x5d54b9[0x1]);
  if (ADMIN.includes(_0x327b41)) {
    return;
  }
  db.run("INSERT OR IGNORE INTO unlimited_trial_users (user_id) VALUES (?)", [_0x327b41], function (_0x59525d) {
    if (_0x59525d) {
      logger.error("Gagal menambahkan user unlimited trial:", _0x59525d.message);
      return _0x501a87.reply("❌ Gagal menambahkan user unlimited trial.");
    }
    _0x501a87.reply("✅ User `" + _0x327b41 + "` sekarang bisa trial tanpa batas.", {
      'parse_mode': "Markdown"
    });
  });
});
bot.command("listunlimitedtrial", async _0x56834a => {
  const _0x33d2f4 = _0x56834a.from.id;
  if (!ADMIN.includes(_0x33d2f4)) {
    return;
  }
  showUnlimitedTrialPage(_0x56834a, 0x1);
});
bot.action(/^unlimitedtrial_(next|prev)_(\d+)$/, async _0x5d6f94 => {
  const _0x3eec58 = _0x5d6f94.match[0x1];
  let _0xeb2f0e = parseInt(_0x5d6f94.match[0x2]);
  _0xeb2f0e = _0x3eec58 === "next" ? _0xeb2f0e + 0x1 : _0xeb2f0e - 0x1;
  if (_0xeb2f0e < 0x1) {
    _0xeb2f0e = 0x1;
  }
  await _0x5d6f94.answerCbQuery();
  showUnlimitedTrialPage(_0x5d6f94, _0xeb2f0e, _0x5d6f94.callbackQuery.message.message_id);
});
function showUnlimitedTrialPage(_0x5b9a4e, _0x2a629b = 0x1, _0x27068d = null) {
  const _0xfbab75 = (_0x2a629b - 0x1) * 0xa;
  db.all("SELECT user_id FROM unlimited_trial_users ORDER BY user_id LIMIT ? OFFSET ?", [0xa, _0xfbab75], (_0x24ae7c, _0x195ba9) => {
    if (_0x24ae7c) {
      logger.error("❌ Gagal mengambil daftar unlimited trial:", _0x24ae7c.message);
      return _0x5b9a4e.reply("❌ Terjadi kesalahan.");
    }
    if (_0x195ba9.length === 0x0) {
      return _0x5b9a4e.reply("📭 Tidak ada data pengguna unlimited trial.");
    }
    const _0xba090b = "📋 *Daftar User Unlimited Trial (Halaman " + _0x2a629b + "):*\n\n" + _0x195ba9.map((_0x3f6715, _0x56ab38) => _0xfbab75 + _0x56ab38 + 0x1 + ". `" + _0x3f6715.user_id + '`').join("\n");
    db.get("SELECT COUNT(*) AS total FROM unlimited_trial_users", (_0x4a1c31, _0x1b8dc6) => {
      const _0xe86d57 = _0x1b8dc6?.['total'] || 0x0;
      const _0x272bde = Math.ceil(_0xe86d57 / 0xa);
      const _0x2a1289 = [];
      if (_0x2a629b > 0x1) {
        _0x2a1289.push({
          'text': "⏮️ Prev",
          'callback_data': "unlimitedtrial_prev_" + _0x2a629b
        });
      }
      if (_0x2a629b < _0x272bde) {
        _0x2a1289.push({
          'text': "Next ⏭️",
          'callback_data': "unlimitedtrial_next_" + _0x2a629b
        });
      }
      const _0x55d753 = {
        'parse_mode': "Markdown",
        'reply_markup': {
          'inline_keyboard': _0x2a1289.length ? [_0x2a1289] : []
        }
      };
      if (_0x27068d) {
        _0x5b9a4e.telegram.editMessageText(_0x5b9a4e.chat.id, _0x27068d, null, _0xba090b, _0x55d753)["catch"](() => {});
      } else {
        _0x5b9a4e.reply(_0xba090b, _0x55d753);
      }
    });
  });
}
bot.command("removeunlimitedtrial", _0x3544fc => {
  const _0x32fc03 = _0x3544fc.from.id;
  if (!ADMIN.includes(_0x32fc03)) {
    return;
  }
  const _0x514b1e = _0x3544fc.message.text.split(" ");
  if (_0x514b1e.length !== 0x2 || isNaN(_0x514b1e[0x1])) {
    return _0x3544fc.reply("⚠️ Format salah. Gunakan: /removeunlimitedtrial <user_id>");
  }
  const _0x30cb1e = parseInt(_0x514b1e[0x1]);
  db.run("DELETE FROM unlimited_trial_users WHERE user_id = ?", [_0x30cb1e], function (_0x8d98f7) {
    if (_0x8d98f7) {
      logger.error("❌ Gagal menghapus user dari unlimited trial:", _0x8d98f7.message);
      return _0x3544fc.reply("❌ Gagal menghapus user.");
    }
    if (this.changes === 0x0) {
      return _0x3544fc.reply("ℹ️ User `" + _0x30cb1e + "` tidak ditemukan di daftar unlimited.", {
        'parse_mode': "Markdown"
      });
    }
    _0x3544fc.reply("✅ Izin trial unlimited untuk user `" + _0x30cb1e + "` telah dicabut.", {
      'parse_mode': "Markdown"
    });
  });
});
bot.command("setreseller", async _0x48847a => {
  const _0x2c8aa9 = _0x48847a.from.id;
  if (!ADMIN.includes(_0x2c8aa9)) {
    return _0x48847a.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  const _0x169c95 = _0x48847a.message.text.split(" ");
  if (_0x169c95.length !== 0x2) {
    return _0x48847a.reply("⚠️ Format salah. Gunakan: `/setreseller <user_id>`", {
      'parse_mode': "Markdown"
    });
  }
  const _0x28dd9c = parseInt(_0x169c95[0x1]);
  if (isNaN(_0x28dd9c)) {
    return _0x48847a.reply("⚠️ `user_id` harus berupa angka.", {
      'parse_mode': "Markdown"
    });
  }
  if (ADMIN.includes(_0x28dd9c)) {
    return _0x48847a.reply("⚠️ Tidak dapat mengubah role admin lain.", {
      'parse_mode': "Markdown"
    });
  }
  db.run("UPDATE users SET role = 'reseller' WHERE user_id = ?", [_0x28dd9c], function (_0x106378) {
    if (_0x106378) {
      logger.error("❌ Kesalahan saat mengatur role reseller:", _0x106378.message);
      return _0x48847a.reply("❌ Kesalahan saat mengatur role reseller.", {
        'parse_mode': 'Markdown'
      });
    }
    if (this.changes === 0x0) {
      return _0x48847a.reply("⚠️ Pengguna tidak ditemukan atau sudah menjadi reseller.", {
        'parse_mode': "Markdown"
      });
    }
    _0x48847a.reply("✅ Pengguna `" + _0x28dd9c + "` berhasil diatur sebagai *Reseller*.", {
      'parse_mode': 'Markdown'
    });
    bot.telegram.sendMessage(_0x28dd9c, "🎉 Selamat! Akun Anda telah diupgrade menjadi *Reseller*! Nikmati harga khusus dan fitur reseller.", {
      'parse_mode': "Markdown"
    })["catch"](_0x16408c => logger.warn("Gagal kirim notif reseller ke " + _0x28dd9c + ": " + _0x16408c.message));
  });
});
bot.command("unsetreseller", async _0x578c38 => {
  const _0x2dfb6d = _0x578c38.from.id;
  if (!ADMIN.includes(_0x2dfb6d)) {
    return _0x578c38.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  const _0x522d26 = _0x578c38.message.text.split(" ");
  if (_0x522d26.length !== 0x2) {
    return _0x578c38.reply("⚠️ Format salah. Gunakan: `/unsetreseller <user_id>`", {
      'parse_mode': "Markdown"
    });
  }
  const _0x581786 = parseInt(_0x522d26[0x1]);
  if (isNaN(_0x581786)) {
    return _0x578c38.reply("⚠️ `user_id` harus berupa angka.", {
      'parse_mode': "Markdown"
    });
  }
  if (ADMIN.includes(_0x581786)) {
    return _0x578c38.reply("⚠️ Tidak dapat mengubah role admin lain.", {
      'parse_mode': 'Markdown'
    });
  }
  db.run("UPDATE users SET role = 'member' WHERE user_id = ?", [_0x581786], function (_0x35997b) {
    if (_0x35997b) {
      logger.error("❌ Kesalahan saat mengatur role member:", _0x35997b.message);
      return _0x578c38.reply("❌ Kesalahan saat mengatur role member.", {
        'parse_mode': "Markdown"
      });
    }
    if (this.changes === 0x0) {
      return _0x578c38.reply("⚠️ Pengguna tidak ditemukan atau sudah menjadi member.", {
        'parse_mode': "Markdown"
      });
    }
    _0x578c38.reply("✅ Pengguna `" + _0x581786 + "` berhasil diubah menjadi *Member Biasa*.", {
      'parse_mode': "Markdown"
    });
    bot.telegram.sendMessage(_0x581786, "😔 Informasi: Role akun Anda telah diubah menjadi *Member Biasa*. Jika Anda merasa ini adalah kesalahan, silakan hubungi admin.", {
      'parse_mode': "Markdown"
    })["catch"](_0x2f013b => logger.warn("Gagal kirim notif member ke " + _0x581786 + ": " + _0x2f013b.message));
  });
});
bot.action("listreseller", async _0x52b393 => {
  const _0x1f74fd = _0x52b393.from.id;
  if (!ADMIN.includes(_0x1f74fd)) {
    await _0x52b393.answerCbQuery("❌ Anda tidak memiliki izin untuk melihat daftar reseller.", {
      'show_alert': true
    });
    return;
  }
  await _0x52b393.answerCbQuery();
  await sendPaginatedResellerList(_0x52b393, 0x1);
});
bot.action(/^listreseller_(next|prev)_(\d+)$/, async _0x14a572 => {
  const _0x409e6c = _0x14a572.match[0x1];
  let _0x3431a6 = parseInt(_0x14a572.match[0x2]);
  _0x3431a6 = _0x409e6c === "next" ? _0x3431a6 + 0x1 : _0x3431a6 - 0x1;
  if (_0x3431a6 < 0x1) {
    _0x3431a6 = 0x1;
  }
  await _0x14a572.answerCbQuery();
  await sendPaginatedResellerList(_0x14a572, _0x3431a6, _0x14a572.callbackQuery.message.message_id);
});
bot.command("listreseller", async _0x52f73a => {
  const _0x2ef102 = _0x52f73a.from.id;
  if (!ADMIN.includes(_0x2ef102)) {
    return _0x52f73a.reply("❌ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  logger.info("[LISTRESELLER] Admin " + _0x2ef102 + " meminta daftar reseller halaman 1");
  await sendPaginatedResellerList(_0x52f73a, 0x1);
});
bot.action(/^listreseller_(next|prev)_(\d+)$/, async _0x46d87b => {
  const _0x51df73 = _0x46d87b.match[0x1];
  let _0x1f61d2 = parseInt(_0x46d87b.match[0x2]);
  _0x1f61d2 = _0x51df73 === "next" ? _0x1f61d2 + 0x1 : _0x1f61d2 - 0x1;
  if (_0x1f61d2 < 0x1) {
    _0x1f61d2 = 0x1;
  }
  await _0x46d87b.answerCbQuery();
  logger.info("[LISTRESELLER] Navigasi ke halaman " + _0x1f61d2);
  await sendPaginatedResellerList(_0x46d87b, _0x1f61d2, _0x46d87b.callbackQuery.message.message_id);
});
async function sendPaginatedResellerList(_0x1b0160, _0x453c3f = 0x1, _0x6c0f43 = null) {
  const _0x2640d6 = (_0x453c3f - 0x1) * 0xa;
  try {
    logger.info("[LISTRESELLER] Query halaman " + _0x453c3f + " (offset " + _0x2640d6 + ')');
    const _0x360e1a = await new Promise((_0x1e2320, _0x28f83b) => {
      db.all("SELECT user_id, saldo FROM users WHERE role = 'reseller' ORDER BY user_id LIMIT ? OFFSET ?", [0xa, _0x2640d6], (_0x22b34a, _0x236063) => _0x22b34a ? _0x28f83b(_0x22b34a) : _0x1e2320(_0x236063));
    });
    const _0x2145ae = await new Promise((_0x163084, _0x21cb02) => {
      db.get("SELECT COUNT(*) AS count FROM users WHERE role = 'reseller'", (_0x131995, _0x1f625d) => _0x131995 ? _0x21cb02(_0x131995) : _0x163084(_0x1f625d.count));
    });
    if (_0x360e1a.length === 0x0) {
      return _0x6c0f43 ? _0x1b0160.telegram.editMessageText(_0x1b0160.chat.id, _0x6c0f43, null, "📭 Belum ada reseller terdaftar.") : _0x1b0160.reply("📭 Belum ada reseller terdaftar.");
    }
    let _0x1a126c = "👥 *Daftar Reseller (Halaman " + _0x453c3f + "):*\n\n";
    for (const _0x4125b7 of _0x360e1a) {
      _0x1a126c += "🆔 `" + _0x4125b7.user_id + "`\n💰 Saldo: Rp" + (_0x4125b7.saldo || 0x0).toLocaleString("id-ID") + "\n\n";
    }
    const _0x3524f3 = Math.ceil(_0x2145ae / 0xa);
    const _0x42e037 = [];
    if (_0x453c3f > 0x1) {
      _0x42e037.push({
        'text': "⬅️ Prev",
        'callback_data': "listreseller_prev_" + _0x453c3f
      });
    }
    if (_0x453c3f < _0x3524f3) {
      _0x42e037.push({
        'text': "Next ➡️",
        'callback_data': "listreseller_next_" + _0x453c3f
      });
    }
    const _0x5683bb = {
      'parse_mode': "Markdown",
      'reply_markup': {
        'inline_keyboard': _0x42e037.length > 0x0 ? [_0x42e037] : []
      }
    };
    if (_0x6c0f43) {
      try {
        await _0x1b0160.telegram.editMessageText(_0x1b0160.chat.id, _0x6c0f43, null, _0x1a126c, _0x5683bb);
      } catch (_0x5e922c) {
        logger.error("❌ Gagal editMessageText:", _0x5e922c.stack || _0x5e922c.message || _0x5e922c);
        await _0x1b0160.reply(_0x1a126c, _0x5683bb);
      }
    } else {
      await _0x1b0160.reply(_0x1a126c, _0x5683bb);
    }
  } catch (_0x2f7e80) {
    logger.error("❌ Gagal menampilkan daftar reseller:", _0x2f7e80.stack || _0x2f7e80.message || _0x2f7e80);
    await _0x1b0160.reply("❌ Terjadi kesalahan saat mengambil daftar reseller.");
  }
}
bot.command("setdiskonreseller", async _0x52f07e => {
  const _0x24eded = _0x52f07e.from.id;
  if (!ADMIN.includes(_0x24eded)) {
    return _0x52f07e.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': 'Markdown'
    });
  }
  const _0x2e3cfd = _0x52f07e.message.text.split(" ");
  if (_0x2e3cfd.length !== 0x2 || isNaN(_0x2e3cfd[0x1]) || parseInt(_0x2e3cfd[0x1]) < 0x0 || parseInt(_0x2e3cfd[0x1]) > 0x64) {
    return _0x52f07e.reply("⚠️ Format salah. Gunakan: `/setdiskonreseller <persen>` (angka antara 0-100)", {
      'parse_mode': 'Markdown'
    });
  }
  const _0x5ea491 = parseInt(_0x2e3cfd[0x1]);
  db.run("UPDATE reseller_config SET discount_percent = ? WHERE id = 1", [_0x5ea491], function (_0x50c3e7) {
    if (_0x50c3e7) {
      logger.error("❌ Kesalahan saat mengatur diskon reseller:", _0x50c3e7.message);
      return _0x52f07e.reply("❌ Kesalahan saat mengatur diskon reseller.", {
        'parse_mode': 'Markdown'
      });
    }
    _0x52f07e.reply("✅ Diskon reseller berhasil diatur menjadi *" + _0x5ea491 + "%*.", {
      'parse_mode': 'Markdown'
    });
  });
});
bot.command("resetdiskonreseller", async _0x487392 => {
  const _0x50b2ab = _0x487392.from.id;
  if (!ADMIN.includes(_0x50b2ab)) {
    return _0x487392.reply("⚠️ Anda tidak memiliki izin untuk menggunakan perintah ini.", {
      'parse_mode': "Markdown"
    });
  }
  db.run("UPDATE reseller_config SET discount_percent = 0 WHERE id = 1", function (_0x53bc66) {
    if (_0x53bc66) {
      logger.error("❌ Kesalahan saat mereset diskon reseller:", _0x53bc66.message);
      return _0x487392.reply("❌ Kesalahan saat mereset diskon reseller.", {
        'parse_mode': "Markdown"
      });
    }
    _0x487392.reply("✅ Diskon reseller berhasil direset menjadi *0%*.", {
      'parse_mode': "Markdown"
    });
  });
});
bot.action(/navigate_(\w+)_(\w+)_(\d+)/, async _0x2d6bd5 => {
  const [, _0x527963, _0x507bc9, _0x33c03c] = _0x2d6bd5.match;
  await startSelectServer(_0x2d6bd5, _0x527963, _0x507bc9, parseInt(_0x33c03c, 0xa));
});
bot.action(/^(create|renew|trial)_username_(vmess|vless|trojan|shadowsocks|ssh)_(.+)$/, async _0x2415bb => {
  await _0x2415bb.telegram.answerCbQuery(_0x2415bb.callbackQuery.id);
  const _0x5cca1a = _0x2415bb.match || [];
  const _0x5ac14e = _0x5cca1a[0x1];
  const _0x9771b4 = _0x5cca1a[0x2];
  const _0x385ecd = _0x5cca1a[0x3];
  if (!_0x5ac14e || !_0x9771b4 || !_0x385ecd) {
    return _0x2415bb.reply("❌ *Perintah tidak dikenali.*", {
      'parse_mode': 'Markdown'
    });
  }
  if (_0x5ac14e === 'trial') {
    const _0x45c5c2 = _0x2415bb.from.id;
    const _0x50b743 = new Date().toISOString().split('T')[0x0];
    if (_0x45c5c2 == ADMIN) {
      return await handleTrial(_0x2415bb, _0x9771b4, _0x385ecd);
    }
    db.get("SELECT batas_create_akun, total_create_akun FROM Server WHERE id = ?", [_0x385ecd], (_0x2f6f68, _0xd31ab3) => {
      if (_0x2f6f68) {
        logger.error("❌ Error fetching server details:", _0x2f6f68.message);
        return _0x2415bb.reply("❌ *Terjadi kesalahan saat mengambil detail server.*", {
          'parse_mode': 'Markdown'
        });
      }
      if (!_0xd31ab3) {
        return _0x2415bb.reply("❌ *Server tidak ditemukan.*", {
          'parse_mode': 'Markdown'
        });
      }
      const {
        batas_create_akun: _0x3e9bd7,
        total_create_akun: _0x7c1c36
      } = _0xd31ab3;
      if (_0x7c1c36 >= _0x3e9bd7) {
        return _0x2415bb.reply("❌ *Server penuh. Trial tidak dapat dibuat di server ini.*", {
          'parse_mode': 'Markdown'
        });
      }
      db.get("SELECT count FROM TrialLog WHERE user_id = ? AND date = ?", [_0x45c5c2, _0x50b743], async (_0x3181f7, _0x2f1654) => {
        if (_0x3181f7) {
          logger.error("❌ Error saat cek log trial:", _0x3181f7);
          return _0x2415bb.reply("❌ *Terjadi kesalahan saat memproses trial. Silahkan coba lagi nanti.*", {
            'parse_mode': 'Markdown'
          });
        }
        const _0x557453 = _0x2f1654?.["count"] || 0x0;
        db.get("SELECT * FROM unlimited_trial_users WHERE user_id = ?", [_0x45c5c2], async (_0x30f180, _0x359988) => {
          if (_0x30f180) {
            logger.error("❌ Error cek unlimited trial:", _0x30f180.message);
            return _0x2415bb.reply("❌ Terjadi kesalahan saat memeriksa hak trial.", {
              'parse_mode': "Markdown"
            });
          }
          const _0x59bcdd = _0x359988 != null;
          if (!_0x59bcdd && _0x557453 >= 0x2) {
            return _0x2415bb.reply("⚠️ *Kamu sudah trial hari ini, Gass Order* 😖", {
              'parse_mode': "Markdown"
            });
          }
          await handleTrial(_0x2415bb, _0x9771b4, _0x385ecd);
          if (!_0x59bcdd) {
            const _0x48e6db = _0x557453 + 0x1;
            db.run("\n            INSERT INTO TrialLog (user_id, date, count)\n            VALUES (?, ?, ?)\n            ON CONFLICT(user_id, date) DO UPDATE SET count = ?\n          ", [_0x45c5c2, _0x50b743, _0x48e6db, _0x48e6db]);
          }
        });
      });
    });
  } else {
    userState[_0x2415bb.chat.id] = {
      'step': "username_" + _0x5ac14e + '_' + _0x9771b4,
      'serverId': _0x385ecd,
      'type': _0x9771b4,
      'action': _0x5ac14e
    };
    db.get("SELECT batas_create_akun, total_create_akun FROM Server WHERE id = ?", [_0x385ecd], async (_0x48f76b, _0x215ad8) => {
      if (_0x48f76b) {
        logger.error("⚠️ Error fetching server details:", _0x48f76b.message);
        return _0x2415bb.reply("❌ *Terjadi kesalahan saat mengambil detail server.*", {
          'parse_mode': 'Markdown'
        });
      }
      if (!_0x215ad8) {
        return _0x2415bb.reply("❌ *Server tidak ditemukan.*", {
          'parse_mode': 'Markdown'
        });
      }
      const {
        batas_create_akun: _0x1ad97e,
        total_create_akun: _0xd7aca8
      } = _0x215ad8;
      if (_0xd7aca8 >= _0x1ad97e) {
        return _0x2415bb.reply("❌ *Server penuh. Tidak dapat membuat akun baru di server ini.*", {
          'parse_mode': 'Markdown'
        });
      }
      await _0x2415bb.reply("👤 *Masukkan username:*", {
        'parse_mode': 'Markdown'
      });
    });
  }
});
async function handleTrial(_0xd4a50d, _0x309b12, _0xb149f5) {
  try {
    const _0x4977d8 = 'trial' + Math.floor(Math.random() * 0x2710);
    const _0xdf4de7 = Math.random().toString(0x24).slice(-0x6);
    let _0x2a2864;
    switch (_0x309b12) {
      case "vmess":
        _0x2a2864 = await trialvmess(_0x4977d8, 0x1, 0x1, 0x1, _0xb149f5);
        break;
      case "vless":
        _0x2a2864 = await trialvless(_0x4977d8, 0x1, 0x1, 0x1, _0xb149f5);
        break;
      case "trojan":
        _0x2a2864 = await trialtrojan(_0x4977d8, 0x1, 0x1, 0x1, _0xb149f5);
        break;
      case "shadowsocks":
        _0x2a2864 = await trialshadowsocks(_0x4977d8, 0x1, 0x1, 0x1, _0xb149f5);
        break;
      case "ssh":
        _0x2a2864 = await trialssh(_0x4977d8, _0xdf4de7, 0x1, 0x1, _0xb149f5);
        break;
      default:
        _0x2a2864 = "❌ *Tipe layanan tidak dikenali.*";
    }
    if (_0x2a2864) {
      await _0xd4a50d.reply(_0x2a2864, {
        'parse_mode': "Markdown"
      });
    }
  } catch (_0x2422e3) {
    logger.error("❌ Error trial " + _0x309b12 + ':', _0x2422e3);
    await _0xd4a50d.reply("❌ *Gagal membuat akun trial. Silahkan coba lagi nanti.*", {
      'parse_mode': "Markdown"
    });
  } finally {
    delete userState[_0xd4a50d.chat.id];
  }
}
function kaburMark(_0x5e268b) {
  return _0x5e268b.replace(/[_*[\]()~`>#+\-=|{}.!\\]/g, "\\$&");
}
async function showLoading(_0x45d164) {
  const _0x2ca3d7 = await _0x45d164.reply("⏳ Mohon menunggu.");
  const _0x3480a0 = ['.', '..', "...", " "];
  let _0x13e694 = 0x0;
  const _0x45df53 = setInterval(async () => {
    _0x13e694 = (_0x13e694 + 0x1) % _0x3480a0.length;
    try {
      await _0x45d164.telegram.editMessageText(_0x45d164.chat.id, _0x2ca3d7.message_id, null, "⏳ Mohon menunggu" + _0x3480a0[_0x13e694]);
    } catch (_0x20e2ee) {
      clearInterval(_0x45df53);
    }
  }, 0x3e8);
  return {
    'messageId': _0x2ca3d7.message_id,
    'intervalId': _0x45df53
  };
}
bot.on("text", async (_0x362fe8, _0xb980e9) => {
  const _0x2ec41a = _0x362fe8.from.id;
  const _0x10c4b1 = _0x362fe8.message?.['text']?.["trim"]();
  const _0x4b6c4a = userState[_0x2ec41a];
  if (typeof _0x10c4b1 !== "string" || _0x10c4b1.length === 0x0) {
    return;
  }
  if (_0x10c4b1.startsWith('/')) {
    return _0xb980e9();
  }
  console.log("📩 Input dari " + _0x2ec41a + ": " + _0x362fe8.message.text);
  logger.info("📩 Input teks dari " + _0x2ec41a + ": " + _0x362fe8.message.text);
  if (global.depositState && global.depositState[_0x2ec41a]?.["action"] === "request_amount_saweria") {
    const _0x37f1fb = _0x362fe8.message.text.trim();
    const _0x22b71d = parseInt(_0x37f1fb.replace(/[^\d]/g, ''), 0xa);
    if (isNaN(_0x22b71d) || _0x22b71d < 0x64) {
      return _0x362fe8.reply("❌ *Nominal tidak valid. Minimal Rp100.*", {
        'parse_mode': "Markdown"
      });
    }
    delete global.depositState[_0x2ec41a];
    await _0x362fe8.reply("⏳ Memproses QRIS Saweria untuk Rp" + _0x22b71d + '...');
    await processDepositSaweria(_0x362fe8, _0x22b71d);
    return;
  }
  if (_0x4b6c4a && _0x4b6c4a.step === "sewascript_create_input") {
    const _0x2e3ad6 = _0x362fe8.message.text.trim();
    if (!/^[a-zA-Z0-9]{3,20}$/.test(_0x2e3ad6)) {
      return _0x362fe8.reply("❌ *Username tidak valid. Harus 3-20 karakter alfanumerik.*", {
        'parse_mode': "Markdown"
      });
    }
    userState[_0x2ec41a] = {
      'step': "sewascript_create_input_ip",
      'username': _0x2e3ad6,
      'bulan': _0x4b6c4a.bulan
    };
    await _0x362fe8.reply("🏷️ *Masukkan IP Address:*", {
      'parse_mode': 'Markdown'
    });
    return;
  }
  if (_0x4b6c4a && _0x4b6c4a.step === "sewascript_create_input_ip") {
    const _0x48614a = _0x362fe8.message.text.trim();
    const {
      username: _0x5c78a3,
      bulan: _0x3aaded
    } = _0x4b6c4a;
    if (!/^\d{1,3}(\.\d{1,3}){3}$/.test(_0x48614a)) {
      return _0x362fe8.reply("❌ *Format IP tidak valid.* Masukkan IP seperti 123.45.67.89", {
        'parse_mode': "Markdown"
      });
    }
    const _0x489817 = 0x2710 * _0x3aaded;
    db.get("SELECT saldo FROM users WHERE user_id = ?", [_0x2ec41a], async (_0x5d8c46, _0x191af1) => {
      if (_0x5d8c46 || !_0x191af1) {
        logger.error("Error mengambil saldo user " + _0x2ec41a + " untuk sewa script:", _0x5d8c46?.["message"]);
        return _0x362fe8.reply("❌ Terjadi kesalahan mengambil saldo pengguna.", {
          'parse_mode': "Markdown"
        });
      }
      if (_0x191af1.saldo < _0x489817) {
        logger.warn("Saldo user " + _0x2ec41a + " tidak cukup (Rp" + _0x191af1.saldo + ") untuk sewa script Rp" + _0x489817);
        return _0x362fe8.reply("❌ *Saldo Anda tidak cukup.*", {
          'parse_mode': "Markdown"
        });
      }
      const {
        exec: _0x4c270d
      } = require("child_process");
      const _0x45c008 = "/usr/local/sbin/literegis " + _0x5c78a3 + " " + _0x3aaded + " " + _0x48614a;
      logger.info("Menjalankan perintah sewa script untuk user " + _0x2ec41a + ": " + _0x45c008);
      const _0x417174 = await showLoading(_0x362fe8);
      const _0x510b79 = _0x417174.messageId;
      const _0x2e2459 = _0x417174.intervalId;
      let _0x2feb8e;
      let _0x32e53d = false;
      try {
        const {
          error: _0x242a10,
          stdout: _0x14085d,
          stderr: _0x473dc4
        } = await new Promise(_0x3d3a38 => {
          _0x4c270d(_0x45c008, (_0x1aea8c, _0x3615d0, _0x554b37) => {
            _0x3d3a38({
              'error': _0x1aea8c,
              'stdout': _0x3615d0,
              'stderr': _0x554b37
            });
          });
        });
        if (_0x242a10) {
          logger.error("Error saat eksekusi literegis untuk user " + _0x2ec41a + ':', _0x242a10.message);
          _0x2feb8e = "❌ Gagal daftar script:\n\n" + (_0x473dc4 || _0x242a10.message);
        } else if (/gagal|error/i.test(_0x14085d)) {
          logger.warn("Literegis mengembalikan pesan gagal untuk user " + _0x2ec41a + ":\n" + _0x14085d);
          _0x2feb8e = "❌ Gagal daftar script:\n\n" + _0x14085d;
        } else {
          _0x32e53d = true;
          _0x2feb8e = "✅ Pendaftaran IP Berhasil:\n" + _0x14085d;
          logger.info("✅ Literegis berhasil untuk user " + _0x2ec41a);
        }
      } catch (_0x379d59) {
        logger.error("Exception saat menjalankan literegis untuk user " + _0x2ec41a + ':', _0x379d59.message);
        _0x2feb8e = "❌ Terjadi kesalahan internal saat memproses pendaftaran script. Silakan coba lagi nanti.";
      } finally {
        clearInterval(_0x2e2459);
        try {
          await _0x362fe8.telegram.deleteMessage(_0x362fe8.chat.id, _0x510b79);
        } catch (_0x3b22c5) {
          logger.warn("Gagal menghapus pesan loading untuk user " + _0x2ec41a + ": " + _0x3b22c5.message);
        }
      }
      try {
        await _0x362fe8.reply(_0x2feb8e, {
          'parse_mode': 'HTML'
        });
      } catch (_0x57e232) {
        logger.error("Gagal mengirim pesan hasil sewa script untuk user " + _0x2ec41a + ':', _0x57e232.message);
      }
      if (_0x32e53d) {
        db.run("UPDATE users SET saldo = saldo - ? WHERE user_id = ?", [_0x489817, _0x2ec41a], _0x530314 => {
          if (_0x530314) {
            logger.error("⚠️ Kesalahan saat mengurangi saldo pengguna untuk sewa script (setelah sukses):", _0x530314.message);
            bot.telegram.sendMessage(ADMIN, "🚨 *PERHATIAN: SALDO GAGAL DIKURANGI SETELAH SEWA SCRIPT SUKSES!*\nUser ID: `" + _0x2ec41a + "`\nUsername TG: `@" + (_0x362fe8.from.username || "N/A") + "`\nJenis: Sewa Script\nJumlah: Rp" + _0x489817.toLocaleString("id-ID") + "\nPesan Error: " + _0x530314.message + "\n*SCRIPT MUNGKIN SUDAH TERDAFTAR TAPI SALDO BELUM TERPOTONG!*", {
              'parse_mode': "Markdown"
            })["catch"](_0x405845 => logger.error("Gagal kirim notif darurat:", _0x405845.message));
          } else {
            logger.info("✅ Saldo Rp" + _0x489817 + " berhasil dikurangi untuk user " + _0x2ec41a + " (Sewa Script berhasil)");
          }
        });
      } else {
        logger.info("⚠️ Saldo user " + _0x2ec41a + " TIDAK dikurangi karena sewa script gagal.");
      }
    });
    delete userState[_0x2ec41a];
    return;
  }
  if (_0x4b6c4a && _0x4b6c4a.step === "sewascript_perpanjang_ip_manual") {
    const _0x52ace1 = _0x362fe8.message.text.trim();
    const _0xfb3c9c = _0x4b6c4a.bulan;
    if (!/^\d{1,3}(\.\d{1,3}){3}$/.test(_0x52ace1)) {
      return _0x362fe8.reply("❌ *Format IP tidak valid.* Masukkan IP seperti 123.45.67.89", {
        'parse_mode': 'Markdown'
      });
    }
    const _0x35186f = 0x2710 * _0xfb3c9c;
    db.get("SELECT saldo FROM users WHERE user_id = ?", [_0x2ec41a], async (_0xb56e6c, _0x1bee77) => {
      if (_0xb56e6c || !_0x1bee77) {
        logger.error("Error mengambil saldo user " + _0x2ec41a + " untuk perpanjang script:", _0xb56e6c?.['message']);
        return _0x362fe8.reply("❌ Terjadi kesalahan mengambil saldo pengguna.", {
          'parse_mode': "Markdown"
        });
      }
      if (_0x1bee77.saldo < _0x35186f) {
        logger.warn("Saldo user " + _0x2ec41a + " tidak cukup (Rp" + _0x1bee77.saldo + ") untuk perpanjang script Rp" + _0x35186f);
        return _0x362fe8.reply("❌ *Saldo Anda tidak cukup untuk memperpanjang.*", {
          'parse_mode': "Markdown"
        });
      }
      const {
        exec: _0x5c6a64
      } = require("child_process");
      const _0x6b14cd = _0xfb3c9c * 0x1e;
      const _0xab0dc4 = "/usr/local/sbin/liteextend " + _0x52ace1 + " " + _0x6b14cd;
      logger.info("Menjalankan perintah perpanjang script untuk user " + _0x2ec41a + ": " + _0xab0dc4);
      const _0x26c0ed = await showLoading(_0x362fe8);
      const _0x13899d = _0x26c0ed.messageId;
      const _0x414b75 = _0x26c0ed.intervalId;
      let _0x4fa305;
      let _0x228ff5 = false;
      try {
        const {
          error: _0x3904b6,
          stdout: _0x398f51,
          stderr: _0x247b01
        } = await new Promise(_0x4efa7a => {
          _0x5c6a64(_0xab0dc4, (_0x507bd9, _0x5061a4, _0x923c1a) => {
            _0x4efa7a({
              'error': _0x507bd9,
              'stdout': _0x5061a4,
              'stderr': _0x923c1a
            });
          });
        });
        if (_0x3904b6) {
          logger.error("Error saat eksekusi liteextend untuk user " + _0x2ec41a + ':', _0x3904b6.message);
          _0x4fa305 = "❌ Gagal memperpanjang script:\n\n" + (_0x247b01 || _0x3904b6.message);
        } else {
          if (/gagal|error/i.test(_0x398f51)) {
            logger.warn("Liteextend mengembalikan pesan gagal untuk user " + _0x2ec41a + ":\n" + _0x398f51);
            _0x4fa305 = "❌ Gagal memperpanjang script:\n\n" + _0x398f51;
          } else {
            _0x228ff5 = true;
            _0x4fa305 = "✅ Perpanjangan IP Berhasil:\n" + _0x398f51;
            logger.info("✅ Liteextend berhasil untuk user " + _0x2ec41a);
          }
        }
      } catch (_0x1f317e) {
        logger.error("Exception saat menjalankan liteextend untuk user " + _0x2ec41a + ':', _0x1f317e.message);
        _0x4fa305 = "❌ Terjadi kesalahan internal saat memproses perpanjangan script. Silakan coba lagi nanti.";
      } finally {
        clearInterval(_0x414b75);
        try {
          await _0x362fe8.telegram.deleteMessage(_0x362fe8.chat.id, _0x13899d);
        } catch (_0x47af3c) {
          logger.warn("Gagal menghapus pesan loading untuk user " + _0x2ec41a + ": " + _0x47af3c.message);
        }
      }
      try {
        await _0x362fe8.reply(_0x4fa305, {
          'parse_mode': "HTML"
        });
      } catch (_0x159bdb) {
        logger.error("Gagal mengirim pesan hasil perpanjang script untuk user " + _0x2ec41a + ':', _0x159bdb.message);
      }
      if (_0x228ff5) {
        db.run("UPDATE users SET saldo = saldo - ? WHERE user_id = ?", [_0x35186f, _0x2ec41a], _0x5b005a => {
          if (_0x5b005a) {
            logger.error("⚠️ Kesalahan saat mengurangi saldo pengguna untuk perpanjang script (setelah sukses):", _0x5b005a.message);
            bot.telegram.sendMessage(ADMIN, "🚨 *PERHATIAN: SALDO GAGAL DIKURANGI SETELAH PERPANJANG SCRIPT SUKSES!*\nUser ID: `" + _0x2ec41a + "`\nUsername TG: `@" + (_0x362fe8.from.username || "N/A") + "`\nJenis: Perpanjang Script\nJumlah: Rp" + _0x35186f.toLocaleString("id-ID") + "\nPesan Error: " + _0x5b005a.message + "\n*SCRIPT MUNGKIN SUDAH DIPERPANJANG TAPI SALDO BELUM TERPOTONG!*", {
              'parse_mode': "Markdown"
            })["catch"](_0x1d2bde => logger.error("Gagal kirim notif darurat:", _0x1d2bde.message));
          } else {
            logger.info("✅ Saldo Rp" + _0x35186f + " berhasil dikurangi untuk user " + _0x2ec41a + " (Perpanjang Script berhasil)");
          }
        });
      } else {
        logger.info("⚠️ Saldo user " + _0x2ec41a + " TIDAK dikurangi karena perpanjang script gagal.");
      }
    });
    delete userState[_0x2ec41a];
    return;
  }
  if (_0x4b6c4a && _0x4b6c4a.step === "atur_bonus_input") {
    const [_0x985c2b, _0x2f12a3, _0x44df3f] = _0x362fe8.message.text.trim().split(/\s+/);
    const _0xb61681 = parseInt(_0x2f12a3, 0xa);
    const _0x2c5474 = parseInt(_0x44df3f, 0xa);
    if (!_0x985c2b || isNaN(_0xb61681) || isNaN(_0x2c5474)) {
      return _0x362fe8.reply("⚠️ Format salah. Gunakan: `on|off <minimal_topup> <persen_bonus>`\nContoh: `on 10000 25`", {
        'parse_mode': "Markdown"
      });
    }
    const _0x2c0e73 = _0x985c2b.toLowerCase() === 'on' ? 0x1 : 0x0;
    db.run("UPDATE bonus_config SET enabled = ?, min_topup = ?, bonus_percent = ? WHERE id = 1", [_0x2c0e73, _0xb61681, _0x2c5474], _0x58d466 => {
      if (_0x58d466) {
        logger.error("❌ Gagal update bonus config:", _0x58d466.message);
        return _0x362fe8.reply("❌ Gagal menyimpan pengaturan bonus.");
      }
      _0x362fe8.reply("✅ Bonus Top Up *" + (_0x2c0e73 ? "Aktif" : "Nonaktif") + "*\n📌 Minimal Top Up: Rp" + _0xb61681 + "\n🎁 Bonus: " + _0x2c5474 + '%', {
        'parse_mode': "Markdown"
      });
      delete userState[_0x2ec41a];
    });
    return;
  }
  if (_0x4b6c4a && _0x4b6c4a.step.startsWith("username_")) {
    _0x4b6c4a.username = _0x362fe8.message.text.trim();
    if (!_0x4b6c4a.username) {
      return _0x362fe8.reply("❌ *Username tidak valid. Masukkan username yang valid.*", {
        'parse_mode': 'Markdown'
      });
    }
    if (_0x4b6c4a.username.length < 0x3 || _0x4b6c4a.username.length > 0x14) {
      return _0x362fe8.reply("❌ *Username harus terdiri dari 3 hingga 20 karakter.*", {
        'parse_mode': "Markdown"
      });
    }
    if (/[^a-zA-Z0-9]/.test(_0x4b6c4a.username)) {
      return _0x362fe8.reply("❌ *Username tidak boleh mengandung karakter khusus atau spasi.*", {
        'parse_mode': "Markdown"
      });
    }
    const {
      username: _0x5c1139,
      serverId: _0x48b455,
      type: _0x3cb836,
      action: _0x5b0397
    } = _0x4b6c4a;
    if (_0x5b0397 === "create") {
      if (_0x3cb836 === "ssh") {
        userState[_0x2ec41a].step = "password_" + _0x4b6c4a.action + '_' + _0x4b6c4a.type;
        await _0x362fe8.reply("🔑 *Masukkan password:*", {
          'parse_mode': "Markdown"
        });
      } else {
        userState[_0x2ec41a].step = "exp_" + _0x4b6c4a.action + '_' + _0x4b6c4a.type;
        await _0x362fe8.reply("⏳ *Masukkan masa aktif (hari):*", {
          'parse_mode': "Markdown"
        });
      }
    } else if (_0x5b0397 === "renew") {
      userState[_0x2ec41a].step = "exp_" + _0x4b6c4a.action + '_' + _0x4b6c4a.type;
      await _0x362fe8.reply("⏳ *Masukkan masa aktif (hari):*", {
        'parse_mode': "Markdown"
      });
    }
    return;
  }
  if (_0x4b6c4a && _0x4b6c4a.step.startsWith('password_')) {
    _0x4b6c4a.password = _0x362fe8.message.text.trim();
    if (!_0x4b6c4a.password) {
      return _0x362fe8.reply("❌ *Password tidak valid. Masukkan password yang valid.*", {
        'parse_mode': "Markdown"
      });
    }
    if (_0x4b6c4a.password.length < 0x1) {
      return _0x362fe8.reply("❌ *Password harus terdiri dari minimal 1 karakter.*", {
        'parse_mode': "Markdown"
      });
    }
    if (/[^a-zA-Z0-9]/.test(_0x4b6c4a.password)) {
      return _0x362fe8.reply("❌ *Password tidak boleh mengandung karakter khusus atau spasi.*", {
        'parse_mode': "Markdown"
      });
    }
    userState[_0x2ec41a].step = "exp_" + _0x4b6c4a.action + '_' + _0x4b6c4a.type;
    await _0x362fe8.reply("⏳ *Masukkan masa aktif (hari):*", {
      'parse_mode': "Markdown"
    });
    return;
  }
  if (_0x4b6c4a && _0x4b6c4a.step.startsWith("exp_")) {
    const _0xc6279b = _0x362fe8.message.text.trim();
    if (!/^\d+$/.test(_0xc6279b)) {
      return _0x362fe8.reply("❌ *Masa aktif tidak valid. Masukkan angka yang valid.*", {
        'parse_mode': "Markdown"
      });
    }
    const _0x1063af = parseInt(_0xc6279b, 0xa);
    if (isNaN(_0x1063af) || _0x1063af <= 0x0) {
      return _0x362fe8.reply("❌ *Masa aktif tidak valid. Masukkan angka yang valid.*", {
        'parse_mode': "Markdown"
      });
    }
    if (_0x1063af > 0x16d) {
      return _0x362fe8.reply("❌ *Masa aktif tidak boleh lebih dari 365 hari.*", {
        'parse_mode': "Markdown"
      });
    }
    _0x4b6c4a.exp = _0x1063af;
    db.get("SELECT quota, iplimit, harga, nama_server, domain FROM Server WHERE id = ?", [_0x4b6c4a.serverId], async (_0x34d1b7, _0x883fe0) => {
      if (_0x34d1b7) {
        logger.error("⚠️ Error fetching server details:", _0x34d1b7.message);
        return _0x362fe8.reply("❌ *Terjadi kesalahan saat mengambil detail server.*", {
          'parse_mode': "Markdown"
        });
      }
      if (!_0x883fe0) {
        return _0x362fe8.reply("❌ *Server tidak ditemukan.*", {
          'parse_mode': "Markdown"
        });
      }
      const _0x46a181 = _0x883fe0.harga;
      let _0x27a8e5 = _0x46a181 * _0x4b6c4a.exp;
      const _0x5c007b = await new Promise(_0x524eff => {
        db.get("SELECT role FROM users WHERE user_id = ?", [_0x2ec41a], (_0x2fd307, _0x27600a) => {
          _0x524eff(_0x27600a ? _0x27600a.role : "member");
        });
      });
      let _0x4dc258 = 0x0;
      if (_0x5c007b === 'reseller') {
        _0x4dc258 = await new Promise(_0x1d56ef => {
          db.get("SELECT discount_percent FROM reseller_config WHERE id = 1", (_0x481f91, _0x5d1976) => {
            if (_0x481f91) {
              reject(_0x481f91);
            } else {
              _0x1d56ef(_0x5d1976 ? _0x5d1976.discount_percent : 0x0);
            }
          });
        });
        _0x27a8e5 = Math.floor(_0x27a8e5 * (0x64 - _0x4dc258) / 0x64);
      }
      db.get("SELECT saldo FROM users WHERE user_id = ?", [_0x2ec41a], async (_0x460643, _0x182afb) => {
        if (_0x460643) {
          logger.error("⚠️ Kesalahan saat mengambil saldo pengguna:", _0x460643.message);
          return _0x362fe8.reply("❌ *Terjadi kesalahan saat mengambil saldo pengguna.*", {
            'parse_mode': "Markdown"
          });
        }
        if (!_0x182afb) {
          return _0x362fe8.reply("❌ *Pengguna tidak ditemukan.*", {
            'parse_mode': "Markdown"
          });
        }
        const _0x557aaf = _0x182afb.saldo;
        if (_0x557aaf < _0x27a8e5) {
          delete userState[_0x2ec41a];
          return _0x362fe8.reply("❌ *Saldo Anda tidak mencukupi untuk melakukan transaksi ini. Saldo Anda: Rp" + _0x557aaf.toLocaleString("id-ID") + ", Harga: Rp" + _0x27a8e5.toLocaleString("id-ID") + '*', {
            'parse_mode': "Markdown"
          });
        }
        let _0x3008e6;
        let _0x59f4a4 = false;
        let _0x2cd587 = '';
        const _0x3a3d88 = await showLoading(_0x362fe8);
        const _0x122cae = _0x3a3d88.messageId;
        const _0x2e2021 = _0x3a3d88.intervalId;
        try {
          logger.info("Mencoba " + _0x4b6c4a.action + " " + _0x4b6c4a.type + " untuk user " + _0x2ec41a + " di server " + _0x883fe0.nama_server);
          if (_0x4b6c4a.action === "create") {
            _0x2cd587 = "Buat Akun";
            switch (_0x4b6c4a.type) {
              case "vmess":
                _0x3008e6 = await createvmess(_0x4b6c4a.username, _0x1063af, _0x883fe0.quota, _0x883fe0.iplimit, _0x4b6c4a.serverId);
                break;
              case 'vless':
                _0x3008e6 = await createvless(_0x4b6c4a.username, _0x1063af, _0x883fe0.quota, _0x883fe0.iplimit, _0x4b6c4a.serverId);
                break;
              case "trojan":
                _0x3008e6 = await createtrojan(_0x4b6c4a.username, _0x1063af, _0x883fe0.quota, _0x883fe0.iplimit, _0x4b6c4a.serverId);
                break;
              case "shadowsocks":
                _0x3008e6 = await createshadowsocks(_0x4b6c4a.username, _0x1063af, _0x883fe0.quota, _0x883fe0.iplimit, _0x4b6c4a.serverId);
                break;
              case "ssh":
                _0x3008e6 = await createssh(_0x4b6c4a.username, _0x4b6c4a.password, _0x1063af, _0x883fe0.iplimit, _0x4b6c4a.serverId);
                break;
              default:
                _0x3008e6 = "❌ *Tipe layanan tidak dikenali.*";
                break;
            }
          } else {
            if (_0x4b6c4a.action === "renew") {
              _0x2cd587 = "Perpanjang Akun";
              switch (_0x4b6c4a.type) {
                case "vmess":
                  _0x3008e6 = await renewvmess(_0x4b6c4a.username, _0x1063af, _0x883fe0.quota, _0x883fe0.iplimit, _0x4b6c4a.serverId);
                  break;
                case 'vless':
                  _0x3008e6 = await renewvless(_0x4b6c4a.username, _0x1063af, _0x883fe0.quota, _0x883fe0.iplimit, _0x4b6c4a.serverId);
                  break;
                case "trojan":
                  _0x3008e6 = await renewtrojan(_0x4b6c4a.username, _0x1063af, _0x883fe0.quota, _0x883fe0.iplimit, _0x4b6c4a.serverId);
                  break;
                case "shadowsocks":
                  _0x3008e6 = await renewshadowsocks(_0x4b6c4a.username, _0x1063af, _0x883fe0.quota, _0x883fe0.iplimit, _0x4b6c4a.serverId);
                  break;
                case "ssh":
                  _0x3008e6 = await renewssh(_0x4b6c4a.username, _0x1063af, _0x883fe0.iplimit, _0x4b6c4a.serverId);
                  break;
                default:
                  _0x3008e6 = "❌ *Tipe layanan tidak dikenali.*";
                  break;
              }
            }
          }
          if (_0x3008e6 && typeof _0x3008e6 === "string" && !_0x3008e6.toLowerCase().includes("gagal") && !_0x3008e6.toLowerCase().includes("error")) {
            _0x59f4a4 = true;
            logger.info("✅ Aksi " + _0x2cd587 + " " + _0x4b6c4a.type + " berhasil untuk user " + _0x2ec41a + '.');
          } else {
            logger.warn("Aksi " + _0x2cd587 + " " + _0x4b6c4a.type + " mengembalikan pesan gagal/error untuk user " + _0x2ec41a + ": " + _0x3008e6);
            _0x3008e6 = _0x3008e6 || "❌ Gagal " + _0x2cd587 + " akun. Mohon coba lagi atau hubungi admin.";
          }
        } catch (_0x45a4b6) {
          logger.error("Error saat memanggil fungsi " + _0x2cd587 + " akun " + _0x4b6c4a.type + " untuk user " + _0x2ec41a + ':', _0x45a4b6.message);
          _0x3008e6 = "❌ Terjadi kesalahan internal saat memproses akun Anda. Mohon coba lagi nanti.";
          _0x59f4a4 = false;
        } finally {
          clearInterval(_0x2e2021);
          try {
            await _0x362fe8.telegram.deleteMessage(_0x362fe8.chat.id, _0x122cae);
          } catch (_0x4c0098) {
            logger.warn("Gagal menghapus pesan loading untuk user " + _0x2ec41a + ": " + _0x4c0098.message);
          }
        }
        if (!_0x59f4a4) {
          delete userState[_0x2ec41a];
          return _0x362fe8.reply(_0x3008e6, {
            'parse_mode': "Markdown"
          });
        }
        db.run("UPDATE users SET saldo = saldo - ? WHERE user_id = ?", [_0x27a8e5, _0x2ec41a], _0x33af22 => {
          if (_0x33af22) {
            logger.error("⚠️ Kesalahan saat mengurangi saldo pengguna (setelah sukses API):", _0x33af22.message);
            bot.telegram.sendMessage(ADMIN, "🚨 *PERHATIAN: SALDO GAGAL DIKURANGI!*\nUser ID: `" + _0x2ec41a + "`\nUsername TG: `@" + (_0x362fe8.from.username || 'N/A') + "`\nProduk: " + _0x4b6c4a.type.toUpperCase() + "\nJenis: " + _0x2cd587 + "\nJumlah: Rp" + _0x27a8e5.toLocaleString("id-ID") + "\nPesan Error: " + _0x33af22.message + "\n*AKUN MUNGKIN SUDAH TERBUAT TAPI SALDO BELUM TERPOTONG!*", {
              'parse_mode': "Markdown"
            })["catch"](_0x2d0a38 => logger.error("Gagal kirim notif darurat:", _0x2d0a38.message));
          } else {
            logger.info("✅ Saldo Rp" + _0x27a8e5 + " berhasil dikurangi untuk user " + _0x2ec41a + " (" + _0x2cd587 + " " + _0x4b6c4a.type + ')');
          }
        });
        db.run("UPDATE Server SET total_create_akun = total_create_akun + 1 WHERE id = ?", [_0x4b6c4a.serverId], _0x732381 => {
          if (_0x732381) {
            logger.error("⚠️ Kesalahan saat menambahkan total_create_akun (setelah sukses API):", _0x732381.message);
          }
        });
        const _0x23e227 = await new Promise(_0x10037d => {
          db.get("SELECT role FROM users WHERE user_id = ?", [_0x2ec41a], (_0x336ad3, _0x2f4ed3) => {
            _0x10037d(_0x2f4ed3 ? _0x2f4ed3.role : "member");
          });
        });
        db.run("INSERT INTO log_penjualan (\n                    user_id,\n                    username,\n                    nama_server,\n                    tipe_akun,\n                    harga,\n                    masa_aktif_hari,\n                    waktu_transaksi,\n                    action_type,\n                    user_role\n                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [_0x362fe8.from.id, _0x362fe8.from.username || '', _0x883fe0.nama_server || "Unknown", _0x4b6c4a.type, _0x27a8e5, _0x4b6c4a.exp, new Date().toISOString(), _0x4b6c4a.action, _0x23e227], _0x24ee7e => {
          if (_0x24ee7e) {
            logger.warn("⚠️ Gagal mencatat log penjualan (setelah sukses API):", _0x24ee7e.message);
          } else {
            logger.info("✅ Log penjualan dicatat: " + _0x362fe8.from.id + " - " + _0x4b6c4a.type + " - " + _0x4b6c4a.action + " - Rp" + _0x27a8e5 + " - Role: " + _0x23e227);
          }
        });
        await afterAccountTransaction({
          'userId': _0x2ec41a,
          'username': _0x362fe8.from.username,
          'produk': _0x4b6c4a.type.toUpperCase(),
          'serverId': _0x4b6c4a.serverId,
          'jenis': _0x2cd587,
          'durasi': _0x4b6c4a.exp,
          'accountUsername': _0x4b6c4a.username
        });
        await _0x362fe8.reply(_0x3008e6, {
          'parse_mode': "Markdown"
        });
        delete userState[_0x2ec41a];
      });
    });
    return;
  }
  if (_0x4b6c4a && _0x4b6c4a.step === "addserver") {
    const _0x110ab1 = _0x362fe8.message.text.trim();
    if (!_0x110ab1) {
      return _0x362fe8.reply("⚠️ *Domain tidak boleh kosong.* Silahkan masukkan domain server yang valid.", {
        'parse_mode': "Markdown"
      });
    }
    userState[_0x2ec41a].step = "addserver_auth";
    userState[_0x2ec41a].domain = _0x110ab1;
    await _0x362fe8.reply("🔑 *Silahkan masukkan auth server:*", {
      'parse_mode': "Markdown"
    });
    return;
  } else {
    if (_0x4b6c4a && _0x4b6c4a.step === "addserver_auth") {
      const _0x815a41 = _0x362fe8.message.text.trim();
      if (!_0x815a41) {
        return _0x362fe8.reply("⚠️ *Auth tidak boleh kosong.* Silahkan masukkan auth server yang valid.", {
          'parse_mode': "Markdown"
        });
      }
      userState[_0x2ec41a].step = "addserver_nama_server";
      userState[_0x2ec41a].auth = _0x815a41;
      await _0x362fe8.reply("🏷️ *Silahkan masukkan nama server:*", {
        'parse_mode': "Markdown"
      });
      return;
    } else {
      if (_0x4b6c4a && _0x4b6c4a.step === "addserver_nama_server") {
        const _0x7f9b53 = _0x362fe8.message.text.trim();
        if (!_0x7f9b53) {
          return _0x362fe8.reply("⚠️ *Nama server tidak boleh kosong.* Silahkan masukkan nama server yang valid.", {
            'parse_mode': "Markdown"
          });
        }
        userState[_0x2ec41a].step = "addserver_quota";
        userState[_0x2ec41a].nama_server = _0x7f9b53;
        await _0x362fe8.reply("📊 *Silahkan masukkan quota server:*", {
          'parse_mode': "Markdown"
        });
        return;
      } else {
        if (_0x4b6c4a && _0x4b6c4a.step === "addserver_quota") {
          const _0x518063 = parseInt(_0x362fe8.message.text.trim(), 0xa);
          if (isNaN(_0x518063)) {
            return _0x362fe8.reply("⚠️ *Quota tidak valid.* Silahkan masukkan quota server yang valid.", {
              'parse_mode': "Markdown"
            });
          }
          userState[_0x2ec41a].step = "addserver_iplimit";
          userState[_0x2ec41a].quota = _0x518063;
          await _0x362fe8.reply("🔢 *Silahkan masukkan limit IP server:*", {
            'parse_mode': "Markdown"
          });
          return;
        } else {
          if (_0x4b6c4a && _0x4b6c4a.step === "addserver_iplimit") {
            const _0x1e2f53 = parseInt(_0x362fe8.message.text.trim(), 0xa);
            if (isNaN(_0x1e2f53)) {
              return _0x362fe8.reply("⚠️ *Limit IP tidak valid.* Silahkan masukkan limit IP server yang valid.", {
                'parse_mode': "Markdown"
              });
            }
            userState[_0x2ec41a].step = "addserver_batas_create_akun";
            userState[_0x2ec41a].iplimit = _0x1e2f53;
            await _0x362fe8.reply("🔢 *Silahkan masukkan batas create akun server:*", {
              'parse_mode': "Markdown"
            });
            return;
          } else {
            if (_0x4b6c4a && _0x4b6c4a.step === "addserver_batas_create_akun") {
              const _0x3c9ff3 = parseInt(_0x362fe8.message.text.trim(), 0xa);
              if (isNaN(_0x3c9ff3)) {
                return _0x362fe8.reply("⚠️ *Batas create akun tidak valid.* Silahkan masukkan batas create akun server yang valid.", {
                  'parse_mode': "Markdown"
                });
              }
              userState[_0x2ec41a].step = "addserver_harga";
              userState[_0x2ec41a].batas_create_akun = _0x3c9ff3;
              await _0x362fe8.reply("💰 *Silahkan masukkan harga server:*", {
                'parse_mode': "Markdown"
              });
              return;
            } else {
              if (_0x4b6c4a && _0x4b6c4a.step === "addserver_harga") {
                const _0x2e638c = parseFloat(_0x362fe8.message.text.trim());
                if (isNaN(_0x2e638c) || _0x2e638c <= 0x0) {
                  return _0x362fe8.reply("⚠️ *Harga tidak valid.* Silahkan masukkan harga server yang valid.", {
                    'parse_mode': "Markdown"
                  });
                }
                const {
                  domain: _0x5665b4,
                  auth: _0x19a557,
                  nama_server: _0x55388d,
                  quota: _0x1baec6,
                  iplimit: _0x5598bc,
                  batas_create_akun: _0x4ed921
                } = _0x4b6c4a;
                try {
                  db.run("INSERT INTO Server (domain, auth, nama_server, quota, iplimit, batas_create_akun, harga, total_create_akun) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [_0x5665b4, _0x19a557, _0x55388d, _0x1baec6, _0x5598bc, _0x4ed921, _0x2e638c, 0x0], function (_0x624753) {
                    if (_0x624753) {
                      logger.error("Error saat menambahkan server:", _0x624753.message);
                      _0x362fe8.reply("❌ *Terjadi kesalahan saat menambahkan server baru.*", {
                        'parse_mode': "Markdown"
                      });
                    } else {
                      _0x362fe8.reply("✅ *Server baru dengan domain " + _0x5665b4 + " telah berhasil ditambahkan.*\n\n📄 *Detail Server:*\n- Domain: " + _0x5665b4 + "\n- Auth: " + _0x19a557 + "\n- Nama Server: " + _0x55388d + "\n- Quota: " + _0x1baec6 + "\n- Limit IP: " + _0x5598bc + "\n- Batas Create Akun: " + _0x4ed921 + "\n- Harga: Rp " + _0x2e638c, {
                        'parse_mode': "Markdown"
                      });
                    }
                  });
                } catch (_0xbd3ae) {
                  logger.error("Error saat menambahkan server:", _0xbd3ae);
                  await _0x362fe8.reply("❌ *Terjadi kesalahan saat menambahkan server baru.*", {
                    'parse_mode': "Markdown"
                  });
                }
                delete userState[_0x2ec41a];
                return;
              }
            }
          }
        }
      }
    }
  }
  if (_0x4b6c4a && _0x4b6c4a.step === 'add_saldo') {
    const _0x31528b = _0x362fe8.message.text.trim();
    const _0x2a7ebc = parseInt(_0x31528b, 0xa);
    if (isNaN(_0x2a7ebc) || _0x2a7ebc <= 0x0) {
      return _0x362fe8.reply("⚠️ *Jumlah saldo tidak valid. Masukkan angka positif.*", {
        'parse_mode': "Markdown"
      });
    }
    try {
      const _0x5b7aa3 = _0x4b6c4a.userId;
      const _0x1b7be3 = await new Promise((_0x4c4394, _0x3ed752) => {
        db.run("UPDATE users SET saldo = saldo + ? WHERE user_id = ?", [_0x2a7ebc, _0x5b7aa3], function (_0x39c258) {
          if (_0x39c258) {
            logger.error("⚠️ Kesalahan saat menambahkan saldo user:", _0x39c258.message);
            _0x3ed752(_0x39c258);
          } else {
            _0x4c4394(this.changes);
          }
        });
      });
      if (_0x1b7be3 > 0x0) {
        _0x362fe8.reply("✅ *Saldo sebesar `" + _0x2a7ebc + "` berhasil ditambahkan ke user ID `" + _0x5b7aa3 + "`.*", {
          'parse_mode': "Markdown"
        });
      } else {
        _0x362fe8.reply("⚠️ *Pengguna tidak ditemukan atau saldo tidak berubah.*", {
          'parse_mode': "Markdown"
        });
      }
    } catch (_0x19a853) {
      logger.error("❌ Terjadi kesalahan saat menambahkan saldo user:", _0x19a853.message);
      _0x362fe8.reply("❌ *Terjadi kesalahan saat menambahkan saldo user.*", {
        'parse_mode': "Markdown"
      });
    }
    delete userState[_0x2ec41a];
    return;
  }
  const _0x518984 = ["edit_batas_create_akun", "edit_limit_ip", "edit_quota", "edit_auth", "edit_domain", 'edit_nama', "edit_total_create_akun"];
  if (_0x4b6c4a && _0x518984.includes(_0x4b6c4a.step)) {
    const _0x559f8d = _0x362fe8.message.text.trim();
    let _0x1451cf;
    let _0x15ef6f;
    let _0x28392f = false;
    switch (_0x4b6c4a.step) {
      case "edit_batas_create_akun":
        _0x1451cf = "UPDATE Server SET batas_create_akun = ? WHERE id = ?";
        _0x15ef6f = "batas create akun";
        _0x28392f = true;
        break;
      case "edit_limit_ip":
        _0x1451cf = "UPDATE Server SET iplimit = ? WHERE id = ?";
        _0x15ef6f = "limit IP";
        _0x28392f = true;
        break;
      case "edit_quota":
        _0x1451cf = "UPDATE Server SET quota = ? WHERE id = ?";
        _0x15ef6f = 'quota';
        _0x28392f = true;
        break;
      case "edit_auth":
        _0x1451cf = "UPDATE Server SET auth = ? WHERE id = ?";
        _0x15ef6f = 'auth';
        break;
      case "edit_domain":
        _0x1451cf = "UPDATE Server SET domain = ? WHERE id = ?";
        _0x15ef6f = "domain";
        break;
      case "edit_nama":
        _0x1451cf = "UPDATE Server SET nama_server = ? WHERE id = ?";
        _0x15ef6f = "nama server";
        break;
      case "edit_total_create_akun":
        _0x1451cf = "UPDATE Server SET total_create_akun = ? WHERE id = ?";
        _0x15ef6f = "total create akun";
        _0x28392f = true;
        break;
    }
    if (_0x28392f && (isNaN(parseInt(_0x559f8d, 0xa)) || parseInt(_0x559f8d, 0xa) < 0x0)) {
      return _0x362fe8.reply("⚠️ *" + _0x15ef6f + " tidak valid.* Masukkan angka positif yang valid.", {
        'parse_mode': "Markdown"
      });
    }
    if (!_0x559f8d) {
      return _0x362fe8.reply("⚠️ *" + _0x15ef6f + " tidak boleh kosong.*", {
        'parse_mode': "Markdown"
      });
    }
    try {
      const _0x32119c = _0x28392f ? parseInt(_0x559f8d, 0xa) : _0x559f8d;
      const _0x54a111 = await new Promise((_0xc71b9b, _0x10d76f) => {
        db.run(_0x1451cf, [_0x32119c, _0x4b6c4a.serverId], function (_0x1ced2a) {
          if (_0x1ced2a) {
            logger.error("⚠️ Kesalahan saat mengedit " + _0x15ef6f + " server:", _0x1ced2a.message);
            _0x10d76f(_0x1ced2a);
          } else {
            _0xc71b9b(this.changes);
          }
        });
      });
      if (_0x54a111 > 0x0) {
        _0x362fe8.reply("✅ *" + _0x15ef6f + " server berhasil diubah menjadi `" + _0x559f8d + "`.*", {
          'parse_mode': "Markdown"
        });
      } else {
        _0x362fe8.reply("⚠️ *Server tidak ditemukan atau " + _0x15ef6f + " tidak berubah.*", {
          'parse_mode': "Markdown"
        });
      }
    } catch (_0x9dadf6) {
      logger.error("❌ Error saat mengedit " + _0x15ef6f + " server:", _0x9dadf6.message);
      _0x362fe8.reply("❌ *Terjadi kesalahan saat mengedit " + _0x15ef6f + " server.*", {
        'parse_mode': "Markdown"
      });
    }
    delete userState[_0x2ec41a];
    return;
  }
  if (_0x4b6c4a && _0x4b6c4a.step === "edit_harga") {
    const _0x4258e2 = _0x362fe8.message.text.trim();
    const _0x15faeb = parseFloat(_0x4258e2);
    if (isNaN(_0x15faeb) || _0x15faeb <= 0x0) {
      return _0x362fe8.reply("⚠️ *Harga tidak valid. Masukkan angka positif yang valid.*", {
        'parse_mode': "Markdown"
      });
    }
    try {
      const _0x579060 = await new Promise((_0x1010b4, _0x52806e) => {
        db.run("UPDATE Server SET harga = ? WHERE id = ?", [_0x15faeb, _0x4b6c4a.serverId], function (_0x3a539a) {
          if (_0x3a539a) {
            logger.error("⚠️ Kesalahan saat mengedit harga server:", _0x3a539a.message);
            _0x52806e(_0x3a539a);
          } else {
            _0x1010b4(this.changes);
          }
        });
      });
      if (_0x579060 > 0x0) {
        _0x362fe8.reply("✅ *Harga server berhasil diubah menjadi `Rp" + _0x15faeb + "`.*", {
          'parse_mode': "Markdown"
        });
      } else {
        _0x362fe8.reply("⚠️ *Server tidak ditemukan atau harga tidak berubah.*", {
          'parse_mode': "Markdown"
        });
      }
    } catch (_0x103c6c) {
      logger.error("❌ Error saat mengedit harga server:", _0x103c6c.message);
      _0x362fe8.reply("❌ *Terjadi kesalahan saat mengedit harga server.*", {
        'parse_mode': "Markdown"
      });
    }
    delete userState[_0x2ec41a];
    return;
  }
});
bot.action("addserver", async _0x36d0cf => {
  try {
    logger.info("📥 Proses tambah server dimulai");
    await _0x36d0cf.answerCbQuery();
    await _0x36d0cf.reply("🌐 *Silahkan masukkan domain/ip server:*", {
      'parse_mode': "Markdown"
    });
    userState[_0x36d0cf.chat.id] = {
      'step': "addserver"
    };
  } catch (_0x1e4eb7) {
    logger.error("❌ Kesalahan saat memulai proses tambah server:", _0x1e4eb7);
    await _0x36d0cf.reply("❌ *GAGAL! Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.*", {
      'parse_mode': "Markdown"
    });
  }
});
bot.action("detailserver", async _0x66bb49 => {
  try {
    logger.info("📋 Proses detail server dimulai");
    await _0x66bb49.answerCbQuery();
    const _0x3afe30 = await new Promise((_0x64f26c, _0x122ddb) => {
      db.all("SELECT * FROM Server", [], (_0x1a9599, _0x52d36c) => {
        if (_0x1a9599) {
          logger.error("⚠️ Kesalahan saat mengambil detail server:", _0x1a9599.message);
          return _0x122ddb("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil detail server.*");
        }
        _0x64f26c(_0x52d36c);
      });
    });
    if (_0x3afe30.length === 0x0) {
      logger.info("⚠️ Tidak ada server yang tersedia");
      return _0x66bb49.reply("⚠️ *PERHATIAN! Tidak ada server yang tersedia saat ini.*", {
        'parse_mode': "Markdown"
      });
    }
    const _0x37db95 = [];
    for (let _0x3c4f50 = 0x0; _0x3c4f50 < _0x3afe30.length; _0x3c4f50 += 0x2) {
      const _0x3bafdd = [];
      _0x3bafdd.push({
        'text': '' + _0x3afe30[_0x3c4f50].nama_server,
        'callback_data': "server_detail_" + _0x3afe30[_0x3c4f50].id
      });
      if (_0x3c4f50 + 0x1 < _0x3afe30.length) {
        _0x3bafdd.push({
          'text': '' + _0x3afe30[_0x3c4f50 + 0x1].nama_server,
          'callback_data': "server_detail_" + _0x3afe30[_0x3c4f50 + 0x1].id
        });
      }
      _0x37db95.push(_0x3bafdd);
    }
    await _0x66bb49.reply("📋 *Silahkan pilih server untuk melihat detail:*", {
      'reply_markup': {
        'inline_keyboard': _0x37db95
      },
      'parse_mode': "Markdown"
    });
  } catch (_0xd84cbd) {
    logger.error("⚠️ Kesalahan saat mengambil detail server:", _0xd84cbd);
    await _0x66bb49.reply("⚠️ *Terjadi kesalahan saat mengambil detail server.*", {
      'parse_mode': "Markdown"
    });
  }
});
bot.action("listserver", async _0x3759b2 => {
  try {
    logger.info("📜 Proses daftar server dimulai");
    await _0x3759b2.answerCbQuery();
    const _0x41a492 = _0x3759b2.from.id;
    const _0x535b55 = await new Promise((_0x1d3d74, _0x5a6008) => {
      db.get("SELECT role FROM users WHERE user_id = ?", [_0x41a492], (_0x9ae30a, _0x116dcf) => {
        if (_0x9ae30a) {
          _0x5a6008(_0x9ae30a);
        } else {
          _0x1d3d74(_0x116dcf ? _0x116dcf.role : "member");
        }
      });
    });
    let _0x2333fe = 0x0;
    if (_0x535b55 === "reseller") {
      _0x2333fe = await new Promise((_0xbbb2e3, _0x5a368b) => {
        db.get("SELECT discount_percent FROM reseller_config WHERE id = 1", (_0x38cf95, _0x432cf0) => {
          if (_0x38cf95) {
            _0x5a368b(_0x38cf95);
          } else {
            _0xbbb2e3(_0x432cf0 ? _0x432cf0.discount_percent : 0x0);
          }
        });
      });
    }
    const _0x3d834d = await new Promise((_0x4d0bb8, _0x34a2ec) => {
      db.all("SELECT * FROM Server", [], (_0x61580c, _0x3ba01f) => {
        if (_0x61580c) {
          logger.error("⚠️ Kesalahan saat mengambil daftar server:", _0x61580c.message);
          return _0x34a2ec("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil daftar server.*");
        }
        _0x4d0bb8(_0x3ba01f);
      });
    });
    if (_0x3d834d.length === 0x0) {
      logger.info("⚠️ Tidak ada server yang tersedia");
      return _0x3759b2.reply("⚠️ *PERHATIAN! Tidak ada server yang tersedia saat ini.*", {
        'parse_mode': "Markdown"
      });
    }
    let _0x4254e8 = "📜 *Daftar Server* 📜\n\n";
    _0x3d834d.forEach((_0x2ec5ef, _0x3216ae) => {
      let _0x2334d8 = _0x2ec5ef.harga;
      if (_0x535b55 === "reseller" && _0x2333fe > 0x0) {
        _0x2334d8 = Math.floor(_0x2ec5ef.harga * (0x64 - _0x2333fe) / 0x64);
      }
      const _0x2256d7 = _0x2334d8 * 0x1e;
      _0x4254e8 += "🌐 *" + _0x2ec5ef.nama_server + "*\n" + ("💰 Harga per hari: Rp" + _0x2334d8 + "\n") + ("📅 Harga per 30 hari: Rp" + _0x2256d7 + "\n") + ("📊 Quota: " + _0x2ec5ef.quota + "GB\n") + ("🔢 Limit IP: " + _0x2ec5ef.iplimit + " IP\n") + ("👥 Total Create Akun: " + _0x2ec5ef.total_create_akun + '/' + _0x2ec5ef.batas_create_akun + "\n\n");
    });
    _0x4254e8 += "\nTotal Jumlah Server: " + _0x3d834d.length;
    await _0x3759b2.reply(_0x4254e8, {
      'parse_mode': "Markdown"
    });
  } catch (_0x56f888) {
    logger.error("⚠️ Kesalahan saat mengambil daftar server:", _0x56f888);
    await _0x3759b2.reply("⚠️ *Terjadi kesalahan saat mengambil daftar server.*", {
      'parse_mode': "Markdown"
    });
  }
});
bot.action("resetdb", async _0x4cb1f5 => {
  try {
    await _0x4cb1f5.answerCbQuery();
    await _0x4cb1f5.reply("🚨 *PERHATIAN! Anda akan menghapus semua server yang tersedia. Apakah Anda yakin?*", {
      'reply_markup': {
        'inline_keyboard': [[{
          'text': "✅ Ya",
          'callback_data': "confirm_resetdb"
        }], [{
          'text': "❌ Tidak",
          'callback_data': "cancel_resetdb"
        }]]
      },
      'parse_mode': "Markdown"
    });
  } catch (_0x5afbe2) {
    logger.error("❌ Error saat memulai proses reset database:", _0x5afbe2);
    await _0x4cb1f5.reply("❌ *" + _0x5afbe2 + '*', {
      'parse_mode': "Markdown"
    });
  }
});
bot.action("confirm_resetdb", async _0x42fec4 => {
  try {
    await _0x42fec4.answerCbQuery();
    await new Promise((_0x3f2460, _0x498635) => {
      db.run("DELETE FROM Server", _0x4ccc52 => {
        if (_0x4ccc52) {
          logger.error("❌ Error saat mereset tabel Server:", _0x4ccc52.message);
          return _0x498635("❗️ *PERHATIAN! Terjadi KESALAHAN SERIUS saat mereset database. Harap segera hubungi administrator!*");
        }
        _0x3f2460();
      });
    });
    await _0x42fec4.reply("🚨 *PERHATIAN! Database telah DIRESET SEPENUHNYA. Semua server telah DIHAPUS TOTAL.*", {
      'parse_mode': "Markdown"
    });
  } catch (_0x3e2617) {
    logger.error("❌ Error saat mereset database:", _0x3e2617);
    await _0x42fec4.reply("❌ *" + _0x3e2617 + '*', {
      'parse_mode': "Markdown"
    });
  }
});
bot.action("cancel_resetdb", async _0x2c718b => {
  try {
    await _0x2c718b.answerCbQuery();
    await _0x2c718b.reply("❌ *Proses reset database dibatalkan.*", {
      'parse_mode': "Markdown"
    });
  } catch (_0x27ea40) {
    logger.error("❌ Error saat membatalkan reset database:", _0x27ea40);
    await _0x2c718b.reply("❌ *" + _0x27ea40 + '*', {
      'parse_mode': "Markdown"
    });
  }
});
bot.action("deleteserver", async _0x8154db => {
  try {
    logger.info("🗑️ Proses hapus server dimulai");
    await _0x8154db.answerCbQuery();
    db.all("SELECT * FROM Server", [], (_0x3fca96, _0xcceef1) => {
      if (_0x3fca96) {
        logger.error("⚠️ Kesalahan saat mengambil daftar server:", _0x3fca96.message);
        return _0x8154db.reply("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil daftar server.*", {
          'parse_mode': "Markdown"
        });
      }
      if (_0xcceef1.length === 0x0) {
        logger.info("⚠️ Tidak ada server yang tersedia");
        return _0x8154db.reply("⚠️ *PERHATIAN! Tidak ada server yang tersedia saat ini.*", {
          'parse_mode': "Markdown"
        });
      }
      const _0x23308f = _0xcceef1.map(_0x1e78e1 => {
        return [{
          'text': _0x1e78e1.nama_server,
          'callback_data': "confirm_delete_server_" + _0x1e78e1.id
        }];
      });
      _0x23308f.push([{
        'text': "🔙 Kembali ke Menu Utama",
        'callback_data': "kembali_ke_menu"
      }]);
      _0x8154db.reply("🗑️ *Pilih server yang ingin dihapus:*", {
        'reply_markup': {
          'inline_keyboard': _0x23308f
        },
        'parse_mode': "Markdown"
      });
    });
  } catch (_0x4d7c6e) {
    logger.error("❌ Kesalahan saat memulai proses hapus server:", _0x4d7c6e);
    await _0x8154db.reply("❌ *GAGAL! Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.*", {
      'parse_mode': "Markdown"
    });
  }
});
bot.action('cek_saldo', async _0x5cb3d0 => {
  try {
    const _0x46a20e = _0x5cb3d0.from.id;
    const _0x5b91d3 = await new Promise((_0x188e74, _0x5c1b7d) => {
      db.get("SELECT saldo FROM users WHERE user_id = ?", [_0x46a20e], (_0x118148, _0x384f0f) => {
        if (_0x118148) {
          logger.error("❌ Kesalahan saat memeriksa saldo:", _0x118148.message);
          return _0x5c1b7d("❌ *Terjadi kesalahan saat memeriksa saldo Anda. Silahkan coba lagi nanti.*");
        }
        _0x188e74(_0x384f0f);
      });
    });
    if (_0x5b91d3) {
      await _0x5cb3d0.reply("📊 *Cek Saldo*\n\n🆔 ID Telegram: " + _0x46a20e + "\n💰 Sisa Saldo: Rp" + _0x5b91d3.saldo, {
        'parse_mode': "Markdown",
        'reply_markup': {
          'inline_keyboard': [[{
            'text': "💸 Top Up",
            'callback_data': 'menu_topup'
          }, {
            'text': "📝 Menu Utama",
            'callback_data': "send_main_menu"
          }]]
        }
      });
    } else {
      await _0x5cb3d0.reply("⚠️ *Anda belum memiliki saldo. Silahkan tambahkan saldo terlebih dahulu.*", {
        'parse_mode': "Markdown"
      });
    }
  } catch (_0xaef153) {
    logger.error("❌ Kesalahan saat memeriksa saldo:", _0xaef153);
    await _0x5cb3d0.reply("❌ *" + _0xaef153.message + '*', {
      'parse_mode': "Markdown"
    });
  }
});
const getUsernameById = async _0xbb4b47 => {
  try {
    const _0x559ea6 = await bot.telegram.getChat(_0xbb4b47);
    return _0x559ea6.username || _0x559ea6.first_name;
  } catch (_0x32a3bc) {
    logger.error("❌ Kesalahan saat mengambil username dari Telegram:", _0x32a3bc.message);
    throw new Error("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil username dari Telegram.*");
  }
};
bot.action("addsaldo_user", async _0x901333 => {
  try {
    logger.info("Add saldo user process started");
    await _0x901333.answerCbQuery();
    const _0x45114c = await new Promise((_0x312ef5, _0x55d09e) => {
      db.all("SELECT id, user_id FROM Users LIMIT 20", [], (_0x1c3b91, _0x409e53) => {
        if (_0x1c3b91) {
          logger.error("❌ Kesalahan saat mengambil daftar user:", _0x1c3b91.message);
          return _0x55d09e("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil daftar user.*");
        }
        _0x312ef5(_0x409e53);
      });
    });
    const _0x2dadab = await new Promise((_0x549849, _0x4da684) => {
      db.get("SELECT COUNT(*) as count FROM Users", [], (_0xee45b4, _0x47d271) => {
        if (_0xee45b4) {
          logger.error("❌ Kesalahan saat menghitung total user:", _0xee45b4.message);
          return _0x4da684("⚠️ *PERHATIAN! Terjadi kesalahan saat menghitung total user.*");
        }
        _0x549849(_0x47d271.count);
      });
    });
    const _0x501089 = [];
    for (let _0x655e16 = 0x0; _0x655e16 < _0x45114c.length; _0x655e16 += 0x2) {
      const _0x2be2dd = [];
      const _0x1363c0 = await getUsernameById(_0x45114c[_0x655e16].user_id);
      _0x2be2dd.push({
        'text': _0x1363c0 || _0x45114c[_0x655e16].user_id,
        'callback_data': "add_saldo_" + _0x45114c[_0x655e16].id
      });
      if (_0x655e16 + 0x1 < _0x45114c.length) {
        const _0x7e9562 = await getUsernameById(_0x45114c[_0x655e16 + 0x1].user_id);
        _0x2be2dd.push({
          'text': _0x7e9562 || _0x45114c[_0x655e16 + 0x1].user_id,
          'callback_data': 'add_saldo_' + _0x45114c[_0x655e16 + 0x1].id
        });
      }
      _0x501089.push(_0x2be2dd);
    }
    const _0x5e0f67 = {
      'inline_keyboard': [..._0x501089]
    };
    if (_0x2dadab > 0x14) {
      _0x5e0f67.inline_keyboard.push([{
        'text': "➡️ Next",
        'callback_data': "next_users_1"
      }]);
    }
    await _0x901333.reply("📊 *Silahkan pilih user untuk menambahkan saldo:*", {
      'reply_markup': _0x5e0f67,
      'parse_mode': 'Markdown'
    });
  } catch (_0x14d192) {
    logger.error("❌ Kesalahan saat memulai proses tambah saldo user:", _0x14d192);
    await _0x901333.reply("❌ *" + _0x14d192 + '*', {
      'parse_mode': 'Markdown'
    });
  }
});
bot.action(/next_users_(\d+)/, async _0x48a7a2 => {
  const _0x29528c = parseInt(_0x48a7a2.match[0x1]);
  const _0x28d751 = _0x29528c * 0x14;
  try {
    logger.info("Next users process started for page " + (_0x29528c + 0x1));
    await _0x48a7a2.answerCbQuery();
    const _0x2555fe = await new Promise((_0x1524c0, _0x2142d3) => {
      db.all("SELECT id, user_id FROM Users LIMIT 20 OFFSET " + _0x28d751, [], (_0x1af9c4, _0x4044bc) => {
        if (_0x1af9c4) {
          logger.error("❌ Kesalahan saat mengambil daftar user:", _0x1af9c4.message);
          return _0x2142d3("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil daftar user.*");
        }
        _0x1524c0(_0x4044bc);
      });
    });
    const _0x25b69a = await new Promise((_0x22fcda, _0x5221c6) => {
      db.get("SELECT COUNT(*) as count FROM Users", [], (_0xf67c, _0xf4e3b0) => {
        if (_0xf67c) {
          logger.error("❌ Kesalahan saat menghitung total user:", _0xf67c.message);
          return _0x5221c6("⚠️ *PERHATIAN! Terjadi kesalahan saat menghitung total user.*");
        }
        _0x22fcda(_0xf4e3b0.count);
      });
    });
    const _0x2a4fef = [];
    for (let _0x3f3515 = 0x0; _0x3f3515 < _0x2555fe.length; _0x3f3515 += 0x2) {
      const _0xf11a7 = [];
      const _0x588808 = await getUsernameById(_0x2555fe[_0x3f3515].user_id);
      _0xf11a7.push({
        'text': _0x588808 || _0x2555fe[_0x3f3515].user_id,
        'callback_data': "add_saldo_" + _0x2555fe[_0x3f3515].id
      });
      if (_0x3f3515 + 0x1 < _0x2555fe.length) {
        const _0x127d79 = await getUsernameById(_0x2555fe[_0x3f3515 + 0x1].user_id);
        _0xf11a7.push({
          'text': _0x127d79 || _0x2555fe[_0x3f3515 + 0x1].user_id,
          'callback_data': "add_saldo_" + _0x2555fe[_0x3f3515 + 0x1].id
        });
      }
      _0x2a4fef.push(_0xf11a7);
    }
    const _0x595d63 = {
      'inline_keyboard': [..._0x2a4fef]
    };
    const _0x11346e = [];
    if (_0x29528c > 0x0) {
      _0x11346e.push([{
        'text': "⬅️ Back",
        'callback_data': "prev_users_" + (_0x29528c - 0x1)
      }]);
    }
    if (_0x28d751 + 0x14 < _0x25b69a) {
      _0x11346e.push([{
        'text': "➡️ Next",
        'callback_data': "next_users_" + (_0x29528c + 0x1)
      }]);
    }
    _0x595d63.inline_keyboard.push(..._0x11346e);
    await _0x48a7a2.editMessageReplyMarkup(_0x595d63);
  } catch (_0x4e566d) {
    logger.error("❌ Kesalahan saat memproses next users:", _0x4e566d);
    await _0x48a7a2.reply("❌ *" + _0x4e566d + '*', {
      'parse_mode': 'Markdown'
    });
  }
});
bot.action(/prev_users_(\d+)/, async _0xcfa34f => {
  const _0x5e5f04 = parseInt(_0xcfa34f.match[0x1]);
  const _0xed88dd = (_0x5e5f04 - 0x1) * 0x14;
  try {
    logger.info("Previous users process started for page " + _0x5e5f04);
    await _0xcfa34f.answerCbQuery();
    const _0x1cb11c = await new Promise((_0x3692e8, _0x336b41) => {
      db.all("SELECT id, user_id FROM Users LIMIT 20 OFFSET " + _0xed88dd, [], (_0x45c751, _0x3e3acb) => {
        if (_0x45c751) {
          logger.error("❌ Kesalahan saat mengambil daftar user:", _0x45c751.message);
          return _0x336b41("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil daftar user.*");
        }
        _0x3692e8(_0x3e3acb);
      });
    });
    const _0x3d65f1 = await new Promise((_0x50cbeb, _0x4c340d) => {
      db.get("SELECT COUNT(*) as count FROM Users", [], (_0x20ed97, _0x20024c) => {
        if (_0x20ed97) {
          logger.error("❌ Kesalahan saat menghitung total user:", _0x20ed97.message);
          return _0x4c340d("⚠️ *PERHATIAN! Terjadi kesalahan saat menghitung total user.*");
        }
        _0x50cbeb(_0x20024c.count);
      });
    });
    const _0x458c91 = [];
    for (let _0x1cf8a6 = 0x0; _0x1cf8a6 < _0x1cb11c.length; _0x1cf8a6 += 0x2) {
      const _0x145e11 = [];
      const _0x15ae42 = await getUsernameById(_0x1cb11c[_0x1cf8a6].user_id);
      _0x145e11.push({
        'text': _0x15ae42 || _0x1cb11c[_0x1cf8a6].user_id,
        'callback_data': "add_saldo_" + _0x1cb11c[_0x1cf8a6].id
      });
      if (_0x1cf8a6 + 0x1 < _0x1cb11c.length) {
        const _0x179218 = await getUsernameById(_0x1cb11c[_0x1cf8a6 + 0x1].user_id);
        _0x145e11.push({
          'text': _0x179218 || _0x1cb11c[_0x1cf8a6 + 0x1].user_id,
          'callback_data': "add_saldo_" + _0x1cb11c[_0x1cf8a6 + 0x1].id
        });
      }
      _0x458c91.push(_0x145e11);
    }
    const _0x53bc4b = {
      'inline_keyboard': [..._0x458c91]
    };
    const _0x7b115a = [];
    if (_0x5e5f04 > 0x0) {
      _0x7b115a.push([{
        'text': "⬅️ Back",
        'callback_data': "prev_users_" + (_0x5e5f04 - 0x1)
      }]);
    }
    if (_0xed88dd + 0x14 < _0x3d65f1) {
      _0x7b115a.push([{
        'text': "➡️ Next",
        'callback_data': "next_users_" + _0x5e5f04
      }]);
    }
    _0x53bc4b.inline_keyboard.push(..._0x7b115a);
    await _0xcfa34f.editMessageReplyMarkup(_0x53bc4b);
  } catch (_0x1ac54d) {
    logger.error("❌ Kesalahan saat memproses previous users:", _0x1ac54d);
    await _0xcfa34f.reply("❌ *" + _0x1ac54d + '*', {
      'parse_mode': "Markdown"
    });
  }
});
bot.action("editserver_limit_ip", async _0x130c16 => {
  try {
    logger.info("Edit server limit IP process started");
    await _0x130c16.answerCbQuery();
    const _0x11bfb5 = await new Promise((_0x4dbc7f, _0xafeebf) => {
      db.all("SELECT id, nama_server FROM Server", [], (_0x96080a, _0xbc7c7e) => {
        if (_0x96080a) {
          logger.error("❌ Kesalahan saat mengambil daftar server:", _0x96080a.message);
          return _0xafeebf("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil daftar server.*");
        }
        _0x4dbc7f(_0xbc7c7e);
      });
    });
    if (_0x11bfb5.length === 0x0) {
      return _0x130c16.reply("⚠️ *PERHATIAN! Tidak ada server yang tersedia untuk diedit.*", {
        'parse_mode': "Markdown"
      });
    }
    const _0xb6fee1 = _0x11bfb5.map(_0x366f41 => ({
      'text': _0x366f41.nama_server,
      'callback_data': "edit_limit_ip_" + _0x366f41.id
    }));
    const _0x2e3baa = [];
    for (let _0x422ef1 = 0x0; _0x422ef1 < _0xb6fee1.length; _0x422ef1 += 0x2) {
      _0x2e3baa.push(_0xb6fee1.slice(_0x422ef1, _0x422ef1 + 0x2));
    }
    await _0x130c16.reply("📊 *Silahkan pilih server untuk mengedit limit IP:*", {
      'reply_markup': {
        'inline_keyboard': _0x2e3baa
      },
      'parse_mode': "Markdown"
    });
  } catch (_0x2f0f78) {
    logger.error("❌ Kesalahan saat memulai proses edit limit IP server:", _0x2f0f78);
    await _0x130c16.reply("❌ *" + _0x2f0f78 + '*', {
      'parse_mode': "Markdown"
    });
  }
});
bot.action("editserver_batas_create_akun", async _0x2acdb1 => {
  try {
    logger.info("Edit server batas create akun process started");
    await _0x2acdb1.answerCbQuery();
    const _0x4a79c6 = await new Promise((_0x29dd06, _0x43351d) => {
      db.all("SELECT id, nama_server FROM Server", [], (_0x29f64d, _0x44f0b0) => {
        if (_0x29f64d) {
          logger.error("❌ Kesalahan saat mengambil daftar server:", _0x29f64d.message);
          return _0x43351d("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil daftar server.*");
        }
        _0x29dd06(_0x44f0b0);
      });
    });
    if (_0x4a79c6.length === 0x0) {
      return _0x2acdb1.reply("⚠️ *PERHATIAN! Tidak ada server yang tersedia untuk diedit.*", {
        'parse_mode': "Markdown"
      });
    }
    const _0x45b8ba = _0x4a79c6.map(_0x1f7db7 => ({
      'text': _0x1f7db7.nama_server,
      'callback_data': "edit_batas_create_akun_" + _0x1f7db7.id
    }));
    const _0x51cc6 = [];
    for (let _0x25c595 = 0x0; _0x25c595 < _0x45b8ba.length; _0x25c595 += 0x2) {
      _0x51cc6.push(_0x45b8ba.slice(_0x25c595, _0x25c595 + 0x2));
    }
    await _0x2acdb1.reply("📊 *Silahkan pilih server untuk mengedit batas create akun:*", {
      'reply_markup': {
        'inline_keyboard': _0x51cc6
      },
      'parse_mode': "Markdown"
    });
  } catch (_0xbb0f3c) {
    logger.error("❌ Kesalahan saat memulai proses edit batas create akun server:", _0xbb0f3c);
    await _0x2acdb1.reply("❌ *" + _0xbb0f3c + '*', {
      'parse_mode': "Markdown"
    });
  }
});
bot.action("editserver_total_create_akun", async _0x3c7f58 => {
  try {
    logger.info("Edit server total create akun process started");
    await _0x3c7f58.answerCbQuery();
    const _0x4c6db7 = await new Promise((_0x3e14d6, _0x1ae711) => {
      db.all("SELECT id, nama_server FROM Server", [], (_0x382e5c, _0xa21869) => {
        if (_0x382e5c) {
          logger.error("❌ Kesalahan saat mengambil daftar server:", _0x382e5c.message);
          return _0x1ae711("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil daftar server.*");
        }
        _0x3e14d6(_0xa21869);
      });
    });
    if (_0x4c6db7.length === 0x0) {
      return _0x3c7f58.reply("⚠️ *PERHATIAN! Tidak ada server yang tersedia untuk diedit.*", {
        'parse_mode': "Markdown"
      });
    }
    const _0xedbc3e = _0x4c6db7.map(_0x57812e => ({
      'text': _0x57812e.nama_server,
      'callback_data': "edit_total_create_akun_" + _0x57812e.id
    }));
    const _0xee0663 = [];
    for (let _0x4ea018 = 0x0; _0x4ea018 < _0xedbc3e.length; _0x4ea018 += 0x2) {
      _0xee0663.push(_0xedbc3e.slice(_0x4ea018, _0x4ea018 + 0x2));
    }
    await _0x3c7f58.reply("📊 *Silahkan pilih server untuk mengedit total create akun:*", {
      'reply_markup': {
        'inline_keyboard': _0xee0663
      },
      'parse_mode': "Markdown"
    });
  } catch (_0x523403) {
    logger.error("❌ Kesalahan saat memulai proses edit total create akun server:", _0x523403);
    await _0x3c7f58.reply("❌ *" + _0x523403 + '*', {
      'parse_mode': "Markdown"
    });
  }
});
bot.action("editserver_quota", async _0x3aff4d => {
  try {
    logger.info("Edit server quota process started");
    await _0x3aff4d.answerCbQuery();
    const _0x51f776 = await new Promise((_0x5eed39, _0x530f47) => {
      db.all("SELECT id, nama_server FROM Server", [], (_0x4290bd, _0x126ceb) => {
        if (_0x4290bd) {
          logger.error("❌ Kesalahan saat mengambil daftar server:", _0x4290bd.message);
          return _0x530f47("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil daftar server.*");
        }
        _0x5eed39(_0x126ceb);
      });
    });
    if (_0x51f776.length === 0x0) {
      return _0x3aff4d.reply("⚠️ *PERHATIAN! Tidak ada server yang tersedia untuk diedit.*", {
        'parse_mode': "Markdown"
      });
    }
    const _0xf36cdc = _0x51f776.map(_0x32477d => ({
      'text': _0x32477d.nama_server,
      'callback_data': "edit_quota_" + _0x32477d.id
    }));
    const _0x4ebfd7 = [];
    for (let _0x551b07 = 0x0; _0x551b07 < _0xf36cdc.length; _0x551b07 += 0x2) {
      _0x4ebfd7.push(_0xf36cdc.slice(_0x551b07, _0x551b07 + 0x2));
    }
    await _0x3aff4d.reply("📊 *Silahkan pilih server untuk mengedit quota:*", {
      'reply_markup': {
        'inline_keyboard': _0x4ebfd7
      },
      'parse_mode': "Markdown"
    });
  } catch (_0x59c280) {
    logger.error("❌ Kesalahan saat memulai proses edit quota server:", _0x59c280);
    await _0x3aff4d.reply("❌ *" + _0x59c280 + '*', {
      'parse_mode': 'Markdown'
    });
  }
});
bot.action("editserver_auth", async _0x2da34e => {
  try {
    logger.info("Edit server auth process started");
    await _0x2da34e.answerCbQuery();
    const _0x3e9498 = await new Promise((_0x45c768, _0x344e38) => {
      db.all("SELECT id, nama_server FROM Server", [], (_0x380402, _0x187cd4) => {
        if (_0x380402) {
          logger.error("❌ Kesalahan saat mengambil daftar server:", _0x380402.message);
          return _0x344e38("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil daftar server.*");
        }
        _0x45c768(_0x187cd4);
      });
    });
    if (_0x3e9498.length === 0x0) {
      return _0x2da34e.reply("⚠️ *PERHATIAN! Tidak ada server yang tersedia untuk diedit.*", {
        'parse_mode': 'Markdown'
      });
    }
    const _0x3a5022 = _0x3e9498.map(_0x4a17fc => ({
      'text': _0x4a17fc.nama_server,
      'callback_data': "edit_auth_" + _0x4a17fc.id
    }));
    const _0x4fece4 = [];
    for (let _0x5b170d = 0x0; _0x5b170d < _0x3a5022.length; _0x5b170d += 0x2) {
      _0x4fece4.push(_0x3a5022.slice(_0x5b170d, _0x5b170d + 0x2));
    }
    await _0x2da34e.reply("🌐 *Silahkan pilih server untuk mengedit auth:*", {
      'reply_markup': {
        'inline_keyboard': _0x4fece4
      },
      'parse_mode': "Markdown"
    });
  } catch (_0x282261) {
    logger.error("❌ Kesalahan saat memulai proses edit auth server:", _0x282261);
    await _0x2da34e.reply("❌ *" + _0x282261 + '*', {
      'parse_mode': "Markdown"
    });
  }
});
bot.action("editserver_harga", async _0x58e2af => {
  try {
    logger.info("Edit server harga process started");
    await _0x58e2af.answerCbQuery();
    const _0x24c094 = await new Promise((_0x578338, _0x1ced24) => {
      db.all("SELECT id, nama_server FROM Server", [], (_0x28e235, _0x1dd08e) => {
        if (_0x28e235) {
          logger.error("❌ Kesalahan saat mengambil daftar server:", _0x28e235.message);
          return _0x1ced24("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil daftar server.*");
        }
        _0x578338(_0x1dd08e);
      });
    });
    if (_0x24c094.length === 0x0) {
      return _0x58e2af.reply("⚠️ *PERHATIAN! Tidak ada server yang tersedia untuk diedit.*", {
        'parse_mode': "Markdown"
      });
    }
    const _0x23e541 = _0x24c094.map(_0x358d8f => ({
      'text': _0x358d8f.nama_server,
      'callback_data': "edit_harga_" + _0x358d8f.id
    }));
    const _0x1f2d1d = [];
    for (let _0x26889 = 0x0; _0x26889 < _0x23e541.length; _0x26889 += 0x2) {
      _0x1f2d1d.push(_0x23e541.slice(_0x26889, _0x26889 + 0x2));
    }
    await _0x58e2af.reply("💰 *Silahkan pilih server untuk mengedit harga:*", {
      'reply_markup': {
        'inline_keyboard': _0x1f2d1d
      },
      'parse_mode': "Markdown"
    });
  } catch (_0x22d6b2) {
    logger.error("❌ Kesalahan saat memulai proses edit harga server:", _0x22d6b2);
    await _0x58e2af.reply("❌ *" + _0x22d6b2 + '*', {
      'parse_mode': "Markdown"
    });
  }
});
bot.action("editserver_domain", async _0x7a9a62 => {
  try {
    logger.info("Edit server domain process started");
    await _0x7a9a62.answerCbQuery();
    const _0x179c5a = await new Promise((_0x2e43a3, _0x115b34) => {
      db.all("SELECT id, nama_server FROM Server", [], (_0x17b14a, _0x4710e5) => {
        if (_0x17b14a) {
          logger.error("❌ Kesalahan saat mengambil daftar server:", _0x17b14a.message);
          return _0x115b34("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil daftar server.*");
        }
        _0x2e43a3(_0x4710e5);
      });
    });
    if (_0x179c5a.length === 0x0) {
      return _0x7a9a62.reply("⚠️ *PERHATIAN! Tidak ada server yang tersedia untuk diedit.*", {
        'parse_mode': 'Markdown'
      });
    }
    const _0x1e758c = _0x179c5a.map(_0x3f30ee => ({
      'text': _0x3f30ee.nama_server,
      'callback_data': "edit_domain_" + _0x3f30ee.id
    }));
    const _0x47dc39 = [];
    for (let _0x3d45db = 0x0; _0x3d45db < _0x1e758c.length; _0x3d45db += 0x2) {
      _0x47dc39.push(_0x1e758c.slice(_0x3d45db, _0x3d45db + 0x2));
    }
    await _0x7a9a62.reply("🌐 *Silahkan pilih server untuk mengedit domain:*", {
      'reply_markup': {
        'inline_keyboard': _0x47dc39
      },
      'parse_mode': "Markdown"
    });
  } catch (_0x3841fe) {
    logger.error("❌ Kesalahan saat memulai proses edit domain server:", _0x3841fe);
    await _0x7a9a62.reply("❌ *" + _0x3841fe + '*', {
      'parse_mode': "Markdown"
    });
  }
});
bot.action("nama_server_edit", async _0x323889 => {
  try {
    logger.info("Edit server nama process started");
    await _0x323889.answerCbQuery();
    const _0x21a9be = await new Promise((_0x25832e, _0x17af27) => {
      db.all("SELECT id, nama_server FROM Server", [], (_0x21c168, _0x27c367) => {
        if (_0x21c168) {
          logger.error("❌ Kesalahan saat mengambil daftar server:", _0x21c168.message);
          return _0x17af27("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil daftar server.*");
        }
        _0x25832e(_0x27c367);
      });
    });
    if (_0x21a9be.length === 0x0) {
      return _0x323889.reply("⚠️ *PERHATIAN! Tidak ada server yang tersedia untuk diedit.*", {
        'parse_mode': "Markdown"
      });
    }
    const _0x311ec5 = _0x21a9be.map(_0x47a59e => ({
      'text': _0x47a59e.nama_server,
      'callback_data': "edit_nama_" + _0x47a59e.id
    }));
    const _0x287b03 = [];
    for (let _0x2395ef = 0x0; _0x2395ef < _0x311ec5.length; _0x2395ef += 0x2) {
      _0x287b03.push(_0x311ec5.slice(_0x2395ef, _0x2395ef + 0x2));
    }
    await _0x323889.reply("🏷️ *Silahkan pilih server untuk mengedit nama:*", {
      'reply_markup': {
        'inline_keyboard': _0x287b03
      },
      'parse_mode': "Markdown"
    });
  } catch (_0x50272b) {
    logger.error("❌ Kesalahan saat memulai proses edit nama server:", _0x50272b);
    await _0x323889.reply("❌ *" + _0x50272b + '*', {
      'parse_mode': "Markdown"
    });
  }
});
bot.action("topup_saldo", async _0x386944 => {
  const _0x101312 = _0x386944.from.id;
  const _0x4c912d = _0x386944.chat.id;
  try {
    await _0x386944.answerCbQuery();
    logger.info("🔍 User " + _0x101312 + " memulai proses top-up saldo.");
    if (lastMenus[_0x101312]) {
      try {
        await bot.telegram.deleteMessage(_0x4c912d, lastMenus[_0x101312]);
        logger.info("🧹 Menu lama milik " + _0x101312 + " berhasil dihapus");
        delete lastMenus[_0x101312];
      } catch (_0x2e653c) {
        console.warn("⚠️ Gagal menghapus menu sebelumnya untuk " + _0x101312 + ':', _0x2e653c.message);
      }
    }
    if (!global.depositState) {
      global.depositState = {};
    }
    global.depositState[_0x101312] = {
      'action': "request_amount",
      'amount': ''
    };
    const _0x22d643 = keyboard_nomor();
    const _0xf04b56 = await _0x386944.reply("💳 Topup Saldo Otomatis QRIS\n━━━━━━━━━━━━━━━━━━━━━━\nMasukkan nominal topup:\n\nRp 0,00\n\nMinimal topup Rp 100\n━━━━━━━━━━━━━━━━━━━━━━\nGunakan tombol di bawah untuk input nominal.", {
      'reply_markup': {
        'inline_keyboard': _0x22d643
      },
      'parse_mode': "Markdown"
    });
    if (_0xf04b56 && _0xf04b56.message_id) {
      lastMenus[_0x101312] = _0xf04b56.message_id;
    }
  } catch (_0x5418cd) {
    logger.error("❌ Kesalahan saat memulai proses top-up saldo:", _0x5418cd);
    try {
      await _0x386944.reply("❌ *GAGAL! Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.*", {
        'parse_mode': "Markdown"
      });
    } catch (_0xfa0128) {
      logger.error("Gagal kirim pesan error:", _0xfa0128.message);
    }
  }
});
bot.action("topup_saweria", async _0x5b5b8d => {
  const _0x5b6f3d = _0x5b5b8d.from.id;
  const _0x3f4231 = _0x5b5b8d.chat.id;
  try {
    await _0x5b5b8d.answerCbQuery();
    logger.info("🔍 User " + _0x5b6f3d + " memulai proses top-up saldo.");
    if (lastMenus[_0x5b6f3d]) {
      try {
        await bot.telegram.deleteMessage(_0x3f4231, lastMenus[_0x5b6f3d]);
        logger.info("🧹 Menu lama milik " + _0x5b6f3d + " berhasil dihapus");
        delete lastMenus[_0x5b6f3d];
      } catch (_0x21849a) {
        console.warn("⚠️ Gagal menghapus menu sebelumnya untuk " + _0x5b6f3d + ':', _0x21849a.message);
      }
    }
    if (!global.depositState) {
      global.depositState = {};
    }
    global.depositState[_0x5b6f3d] = {
      'action': "request_amount_saweria",
      'amount': ''
    };
    logger.info("📝 Menunggu input nominal dari user " + _0x5b6f3d);
    const _0x441b85 = await _0x5b5b8d.reply("💰 *Silahkan ketik nominal top-up yang ingin Anda bayarkan melalui QRIS Saweria.*\n\nContoh: `1000`", {
      'parse_mode': 'Markdown'
    });
    if (_0x441b85 && _0x441b85.message_id) {
      lastMenus[_0x5b6f3d] = _0x441b85.message_id;
    }
  } catch (_0xd3162b) {
    logger.error("❌ Kesalahan saat memulai proses top-up Saweria:", _0xd3162b);
    try {
      await _0x5b5b8d.reply("❌ *GAGAL!* Terjadi kesalahan saat memproses top-up Saweria Anda. Silahkan coba lagi nanti.", {
        'parse_mode': 'Markdown'
      });
    } catch (_0x1df086) {
      logger.error("Gagal kirim pesan error:", _0x1df086.message);
    }
  }
});
bot.action(/^saweria_nominal_(\d+)$/, async _0x4540ed => {
  const _0x26b61a = _0x4540ed.from.id;
  const _0x416e7a = parseInt(_0x4540ed.match[0x1]);
  delete global.depositState[_0x26b61a];
  await _0x4540ed.answerCbQuery();
  await _0x4540ed.reply("🔄 Memproses QRIS Saweria untuk Rp" + _0x416e7a + "...");
  await processDepositSaweria(_0x4540ed, _0x416e7a);
});
bot.action("bonus_topup_setting", async _0x2285e3 => {
  await _0x2285e3.answerCbQuery();
  db.get("SELECT * FROM bonus_config WHERE id = 1", (_0x58ca19, _0x548320) => {
    if (_0x58ca19 || !_0x548320) {
      return _0x2285e3.reply("❌ Gagal mengambil pengaturan bonus.");
    }
    _0x2285e3.reply("⚙️ *Pengaturan Bonus Top Up*\n\n" + ("Status: *" + (_0x548320.enabled ? "Aktif ✅" : "Nonaktif ❌") + "*\n") + ("Minimal TopUp: *Rp" + _0x548320.min_topup + "*\n") + ("Bonus: *" + _0x548320.bonus_percent + "%*\n\n") + "Klik tombol di bawah ini untuk mengatur:", {
      'parse_mode': 'Markdown',
      'reply_markup': {
        'inline_keyboard': [[{
          'text': "🔧 Atur Bonus TopUp",
          'callback_data': "atur_bonus_topup"
        }]]
      }
    });
  });
});
bot.action("atur_bonus_topup", async _0x3e0b60 => {
  await _0x3e0b60.answerCbQuery();
  userState[_0x3e0b60.chat.id] = {
    'step': "atur_bonus_input"
  };
  await _0x3e0b60.reply("✍️ Kirim format:\n`on|off <minimal_topup> <persen_bonus>`\n\nContoh:\n`on 10000 25`", {
    'parse_mode': "Markdown"
  });
});
bot.action("log_bonus_topup", async _0x483733 => {
  await _0x483733.answerCbQuery();
  db.all("SELECT * FROM bonus_log ORDER BY id DESC LIMIT 10", [], (_0x1ef526, _0x3e1aa7) => {
    if (_0x1ef526 || _0x3e1aa7.length === 0x0) {
      return _0x483733.reply("⚠️ Belum ada data bonus");
    }
    const _0x374c4a = _0x3e1aa7.map((_0x2b4877, _0xae59cb) => {
      const _0x384263 = _0x2b4877.username ? '`' + _0x2b4877.username + '`' : '`' + _0x2b4877.user_id + '`';
      const _0x7d4baf = new Date(_0x2b4877.timestamp).toLocaleString("id-ID", {
        'year': "numeric",
        'month': "2-digit",
        'day': '2-digit',
        'hour': "2-digit",
        'minute': '2-digit',
        'second': '2-digit',
        'hour12': false
      });
      return '*' + (_0xae59cb + 0x1) + ".* " + _0x384263 + "\n🆔 ID: `" + _0x2b4877.user_id + "`\n💸 TopUp: Rp" + _0x2b4877.amount + "\n🎁 Bonus: Rp" + _0x2b4877.bonus + "\n🕒 " + _0x7d4baf;
    }).join("\n\n");
    _0x483733.reply("📋 *Riwayat Bonus Top Up (10 Terbaru)*\n\n" + _0x374c4a, {
      'parse_mode': 'Markdown'
    });
  });
});
bot.action("log_topup", async _0x52521d => {
  await _0x52521d.answerCbQuery();
  db.all("SELECT * FROM topup_log ORDER BY id DESC LIMIT 10", [], (_0x4a0e2b, _0x1d3255) => {
    if (_0x4a0e2b || _0x1d3255.length === 0x0) {
      return _0x52521d.reply("⚠️ Belum ada data topup");
    }
    const _0x5d0a8a = _0x1d3255.map((_0x2b3444, _0x57cda7) => {
      const _0x3fa5fc = _0x2b3444.username ? '`' + _0x2b3444.username + '`' : '`' + _0x2b3444.user_id + '`';
      const _0x22ed83 = new Date(_0x2b3444.waktu).toLocaleString("id-ID", {
        'year': "numeric",
        'month': "2-digit",
        'day': "2-digit",
        'hour': '2-digit',
        'minute': "2-digit",
        'second': "2-digit",
        'hour12': false
      });
      return '*' + (_0x57cda7 + 0x1) + ".* " + _0x3fa5fc + "\n🆔 ID: `" + _0x2b3444.user_id + "`\n💸 TopUp: Rp" + _0x2b3444.amount + "\n🕒 " + _0x22ed83;
    }).join("\n\n");
    _0x52521d.reply("📋 *Riwayat Top Up (10 Terbaru)*\n\n" + _0x5d0a8a, {
      'parse_mode': "Markdown"
    });
  });
});
function prosesBonusTopUp(_0x41d402, _0x486c20, _0x3450a8) {
  return new Promise((_0x48ef12, _0x224e08) => {
    db.get("SELECT * FROM bonus_config WHERE id = 1", (_0x4f769c, _0x5765c0) => {
      if (_0x4f769c || !_0x5765c0) {
        return _0x48ef12();
      }
      if (_0x5765c0.enabled && _0x3450a8 >= _0x5765c0.min_topup) {
        const _0x11e73b = Math.floor(_0x3450a8 * _0x5765c0.bonus_percent / 0x64);
        db.run("UPDATE users SET saldo = saldo + ? WHERE user_id = ?", [_0x11e73b, _0x41d402], _0x560ec5 => {
          if (_0x560ec5) {
            return _0x48ef12();
          }
          db.run("INSERT INTO bonus_log (user_id, username, amount, bonus, timestamp) VALUES (?, ?, ?, ?, ?)", [_0x41d402, _0x486c20 || '', _0x3450a8, _0x11e73b, new Date().toISOString()], () => {
            bot.telegram.sendMessage(_0x41d402, "🎁 *Bonus Top Up!* Kamu dapat saldo tambahan *Rp" + _0x11e73b + "* (" + _0x5765c0.bonus_percent + '%)', {
              'parse_mode': 'Markdown'
            });
            _0x48ef12();
          });
        });
      } else {
        _0x48ef12();
      }
    });
  });
}
function logTopup(_0x449d20, _0x322fa6, _0x5d232a, _0x2f291c) {
  db.run("INSERT INTO topup_log (user_id, username, amount, method, waktu) VALUES (?, ?, ?, ?, ?)", [_0x449d20, _0x322fa6 || '', _0x5d232a, _0x2f291c, new Date().toISOString()], _0x3280a8 => {
    if (_0x3280a8) {
      logger.error("❌ Gagal insert ke topup_log:", _0x3280a8.message);
    } else {
      logger.info("✅ Log Topup: " + _0x449d20 + " - " + _0x322fa6 + " - Rp" + _0x5d232a + " - " + _0x2f291c);
    }
  });
}
bot.action(/edit_harga_(\d+)/, async _0x3437a2 => {
  const _0x1b878a = _0x3437a2.match[0x1];
  logger.info("User " + _0x3437a2.from.id + " memilih untuk mengedit harga server dengan ID: " + _0x1b878a);
  userState[_0x3437a2.chat.id] = {
    'step': "edit_harga",
    'serverId': _0x1b878a
  };
  await _0x3437a2.reply("💰 *Silahkan masukkan harga server baru:*", {
    'reply_markup': {
      'inline_keyboard': keyboard_nomor()
    },
    'parse_mode': "Markdown"
  });
});
bot.action(/add_saldo_(\d+)/, async _0x38d498 => {
  const _0x2f6e0b = _0x38d498.match[0x1];
  logger.info("User " + _0x38d498.from.id + " memilih untuk menambahkan saldo user dengan ID: " + _0x2f6e0b);
  userState[_0x38d498.chat.id] = {
    'step': "add_saldo",
    'userId': _0x2f6e0b
  };
  await _0x38d498.reply("📊 *Silahkan masukkan jumlah saldo yang ingin ditambahkan:*", {
    'reply_markup': {
      'inline_keyboard': keyboard_nomor()
    },
    'parse_mode': 'Markdown'
  });
});
bot.action(/edit_batas_create_akun_(\d+)/, async _0x9b7fe7 => {
  const _0x3340cb = _0x9b7fe7.match[0x1];
  logger.info("User " + _0x9b7fe7.from.id + " memilih untuk mengedit batas create akun server dengan ID: " + _0x3340cb);
  userState[_0x9b7fe7.chat.id] = {
    'step': "edit_batas_create_akun",
    'serverId': _0x3340cb
  };
  await _0x9b7fe7.reply("📊 *Silahkan masukkan batas create akun server baru:*", {
    'reply_markup': {
      'inline_keyboard': keyboard_nomor()
    },
    'parse_mode': "Markdown"
  });
});
bot.action(/edit_total_create_akun_(\d+)/, async _0x1b6f5e => {
  const _0x599ad3 = _0x1b6f5e.match[0x1];
  logger.info("User " + _0x1b6f5e.from.id + " memilih untuk mengedit total create akun server dengan ID: " + _0x599ad3);
  userState[_0x1b6f5e.chat.id] = {
    'step': "edit_total_create_akun",
    'serverId': _0x599ad3
  };
  await _0x1b6f5e.reply("📊 *Silahkan masukkan total create akun server baru:*", {
    'reply_markup': {
      'inline_keyboard': keyboard_nomor()
    },
    'parse_mode': "Markdown"
  });
});
bot.action(/edit_limit_ip_(\d+)/, async _0x125449 => {
  const _0x1791e4 = _0x125449.match[0x1];
  logger.info("User " + _0x125449.from.id + " memilih untuk mengedit limit IP server dengan ID: " + _0x1791e4);
  userState[_0x125449.chat.id] = {
    'step': "edit_limit_ip",
    'serverId': _0x1791e4
  };
  await _0x125449.reply("📊 *Silahkan masukkan limit IP server baru:*", {
    'reply_markup': {
      'inline_keyboard': keyboard_nomor()
    },
    'parse_mode': "Markdown"
  });
});
bot.action(/edit_quota_(\d+)/, async _0x4273c9 => {
  const _0x353153 = _0x4273c9.match[0x1];
  logger.info("User " + _0x4273c9.from.id + " memilih untuk mengedit quota server dengan ID: " + _0x353153);
  userState[_0x4273c9.chat.id] = {
    'step': "edit_quota",
    'serverId': _0x353153
  };
  await _0x4273c9.reply("📊 *Silahkan masukkan quota server baru:*", {
    'reply_markup': {
      'inline_keyboard': keyboard_nomor()
    },
    'parse_mode': 'Markdown'
  });
});
bot.action(/edit_auth_(\d+)/, async _0x449bf5 => {
  const _0xfea1ab = _0x449bf5.match[0x1];
  logger.info("User " + _0x449bf5.from.id + " memilih untuk mengedit auth server dengan ID: " + _0xfea1ab);
  userState[_0x449bf5.chat.id] = {
    'step': "edit_auth",
    'serverId': _0xfea1ab
  };
  await _0x449bf5.reply("✏️ *Silahkan kirim auth server baru sekarang:*", {
    'parse_mode': 'Markdown'
  });
});
bot.action(/edit_domain_(\d+)/, async _0xe71a6a => {
  const _0x3bb87c = _0xe71a6a.match[0x1];
  logger.info("User " + _0xe71a6a.from.id + " memilih untuk mengedit domain server dengan ID: " + _0x3bb87c);
  userState[_0xe71a6a.chat.id] = {
    'step': "edit_domain",
    'serverId': _0x3bb87c
  };
  await _0xe71a6a.reply("🌐 *Silahkan kirim domain server baru sekarang:*", {
    'parse_mode': "Markdown"
  });
});
bot.action(/edit_nama_(\d+)/, async _0x192a97 => {
  const _0x4c11f6 = _0x192a97.match[0x1];
  logger.info("User " + _0x192a97.from.id + " memilih untuk mengedit nama server dengan ID: " + _0x4c11f6);
  userState[_0x192a97.chat.id] = {
    'step': "edit_nama",
    'serverId': _0x4c11f6
  };
  await _0x192a97.reply("🏷️ *Silahkan kirim nama server baru sekarang:*", {
    'parse_mode': "Markdown"
  });
});
bot.action(/confirm_delete_server_(\d+)/, async _0x3fbe3c => {
  try {
    db.run("DELETE FROM Server WHERE id = ?", [_0x3fbe3c.match[0x1]], function (_0xbad590) {
      if (_0xbad590) {
        logger.error("Error deleting server:", _0xbad590.message);
        return _0x3fbe3c.reply("⚠️ *PERHATIAN! Terjadi kesalahan saat menghapus server.*", {
          'parse_mode': "Markdown"
        });
      }
      if (this.changes === 0x0) {
        logger.info("Server tidak ditemukan");
        return _0x3fbe3c.reply("⚠️ *PERHATIAN! Server tidak ditemukan.*", {
          'parse_mode': "Markdown"
        });
      }
      logger.info("Server dengan ID " + _0x3fbe3c.match[0x1] + " berhasil dihapus");
      _0x3fbe3c.reply("✅ *Server berhasil dihapus.*", {
        'parse_mode': "Markdown"
      });
    });
  } catch (_0x1283a5) {
    logger.error("Kesalahan saat menghapus server:", _0x1283a5);
    await _0x3fbe3c.reply("❌ *GAGAL! Terjadi kesalahan saat memproses permintaan Anda. Silahkan coba lagi nanti.*", {
      'parse_mode': "Markdown"
    });
  }
});
bot.action(/server_detail_(\d+)/, async _0x5665e5 => {
  const _0x286fb2 = _0x5665e5.match[0x1];
  try {
    const _0x4ca06f = await new Promise((_0x2f0b47, _0x3f3a07) => {
      db.get("SELECT * FROM Server WHERE id = ?", [_0x286fb2], (_0x1c73e1, _0x37f853) => {
        if (_0x1c73e1) {
          logger.error("⚠️ Kesalahan saat mengambil detail server:", _0x1c73e1.message);
          return _0x3f3a07("⚠️ *PERHATIAN! Terjadi kesalahan saat mengambil detail server.*");
        }
        _0x2f0b47(_0x37f853);
      });
    });
    if (!_0x4ca06f) {
      logger.info("⚠️ Server tidak ditemukan");
      return _0x5665e5.reply("⚠️ *PERHATIAN! Server tidak ditemukan.*", {
        'parse_mode': 'Markdown'
      });
    }
    const _0x46387a = "📋 *Detail Server* 📋\n\n" + ("🌐 *Domain:* `" + _0x4ca06f.domain + "`\n") + ("🔑 *Auth:* `" + _0x4ca06f.auth + "`\n") + ("🏷️ *Nama Server:* `" + _0x4ca06f.nama_server + "`\n") + ("📊 *Quota:* `" + _0x4ca06f.quota + "`\n") + ("📶 *Limit IP:* `" + _0x4ca06f.iplimit + "`\n") + ("🔢 *Batas Create Akun:* `" + _0x4ca06f.batas_create_akun + "`\n") + ("📋 *Total Create Akun:* `" + _0x4ca06f.total_create_akun + "`\n") + ("💵 *Harga:* `Rp " + _0x4ca06f.harga + "`\n\n");
    await _0x5665e5.reply(_0x46387a, {
      'parse_mode': 'Markdown'
    });
  } catch (_0x3a071e) {
    logger.error("⚠️ Kesalahan saat mengambil detail server:", _0x3a071e);
    await _0x5665e5.reply("⚠️ *Terjadi kesalahan saat mengambil detail server.*", {
      'parse_mode': "Markdown"
    });
  }
});
bot.on("callback_query", async _0x26feb8 => {
  const _0x56b07f = _0x26feb8.from.id;
  const _0x4bf703 = _0x26feb8.callbackQuery.data;
  const _0x280b54 = userState[_0x26feb8.chat.id];
  await _0x26feb8.answerCbQuery();
  if (global.depositState && global.depositState[_0x56b07f] && global.depositState[_0x56b07f].action === "request_amount") {
    await handleDepositState(_0x26feb8, _0x56b07f, _0x4bf703);
  } else {
    if (_0x280b54) {
      switch (_0x280b54.step) {
        case "add_saldo":
          await handleAddSaldo(_0x26feb8, _0x280b54, _0x4bf703);
          break;
        case "edit_batas_create_akun":
          await handleEditBatasCreateAkun(_0x26feb8, _0x280b54, _0x4bf703);
          break;
        case "edit_limit_ip":
          await handleEditiplimit(_0x26feb8, _0x280b54, _0x4bf703);
          break;
        case 'edit_quota':
          await handleEditQuota(_0x26feb8, _0x280b54, _0x4bf703);
          break;
        case 'edit_auth':
          await handleEditAuth(_0x26feb8, _0x280b54, _0x4bf703);
          break;
        case "edit_domain":
          await handleEditDomain(_0x26feb8, _0x280b54, _0x4bf703);
          break;
        case "edit_harga":
          await handleEditHarga(_0x26feb8, _0x280b54, _0x4bf703);
          break;
        case "edit_nama":
          await handleEditNama(_0x26feb8, _0x280b54, _0x4bf703);
          break;
        case "edit_total_create_akun":
          await handleEditTotalCreateAkun(_0x26feb8, _0x280b54, _0x4bf703);
          break;
        case "listreseller_":
          const _0x57f286 = _0x4bf703.split('_');
          const _0x2b9e2a = _0x57f286[0x1];
          let _0x19d990 = parseInt(_0x57f286[0x2]);
          _0x19d990 = _0x2b9e2a === 'next' ? _0x19d990 + 0x1 : _0x19d990 - 0x1;
          if (_0x19d990 < 0x1) {
            _0x19d990 = 0x1;
          }
          await sendPaginatedResellerList(_0x26feb8, _0x19d990, _0x26feb8.callbackQuery.message.message_id);
          break;
      }
    }
  }
});
async function handleDepositState(_0x58ff8b, _0x1eab65, _0x5c5d86) {
  let _0x2325ea = global.depositState[_0x1eab65];
  if (!_0x2325ea) {
    return;
  }
  let _0x152cb1 = _0x2325ea.amount || '';
  const _0x37af9e = _0x2325ea.action;
  if (_0x5c5d86 === "delete") {
    _0x152cb1 = _0x152cb1.slice(0x0, -0x1);
  } else {
    if (_0x5c5d86 === "confirm") {
      if (!_0x152cb1 || _0x152cb1.length === 0x0) {
        return await _0x58ff8b.answerCbQuery("⚠️ Jumlah tidak boleh kosong!", {
          'show_alert': true
        });
      }
      if (parseInt(_0x152cb1) < 0x64) {
        return await _0x58ff8b.answerCbQuery("⚠️ Jumlah minimal top-up adalah 100 Ya Kak...!!!", {
          'show_alert': true
        });
      }
      try {
        await _0x58ff8b.deleteMessage();
      } catch (_0x1b25d9) {
        logger.warn("⚠️ Gagal menghapus pesan top-up konfirmasi: " + _0x1b25d9.message);
      }
      if (_0x37af9e === "request_amount_saweria") {
        await processDepositSaweria(_0x58ff8b, _0x152cb1);
      } else {
        global.depositState[_0x1eab65].action = "confirm_amount";
        await processDeposit(_0x58ff8b, _0x152cb1);
      }
      delete global.depositState[_0x1eab65];
      return;
    } else {
      const _0xca50 = _0x37af9e === "request_amount_saweria" ? 0x8 : 0xc;
      if (_0x152cb1.length < _0xca50) {
        _0x152cb1 += _0x5c5d86;
      } else {
        return await _0x58ff8b.answerCbQuery("⚠️ Jumlah maksimal adalah " + _0xca50 + " digit!", {
          'show_alert': true
        });
      }
    }
  }
  global.depositState[_0x1eab65].amount = _0x152cb1;
  const _0x5b80c9 = _0x37af9e === "request_amount_saweria" ? "💰 Masukkan nominal topup Saweria QRIS:\n\nNominal saat ini: *Rp" + _0x152cb1 + '*' : "💳 Topup Saldo Otomatis QRIS\n━━━━━━━━━━━━━━━━━━━━━━\nMasukkan nominal topup:\n\nRp " + _0x152cb1 + "\n\nMinimal topup Rp 100\n━━━━━━━━━━━━━━━━━━━━━━\nGunakan tombol di bawah untuk input nominal.";
  try {
    await _0x58ff8b.editMessageText(_0x5b80c9, {
      'reply_markup': {
        'inline_keyboard': keyboard_nomor()
      },
      'parse_mode': "Markdown"
    });
  } catch (_0x545f5a) {
    if (_0x545f5a.description && _0x545f5a.description.includes("message is not modified")) {
      return;
    }
    logger.error("❌ Gagal update pesan nominal top-up:", _0x545f5a);
  }
}
async function handleAddSaldo(_0x4637fa, _0x2c63bd, _0x46aff5) {
  let _0x74ee8f = _0x2c63bd.saldo || '';
  if (_0x46aff5 === "delete") {
    _0x74ee8f = _0x74ee8f.slice(0x0, -0x1);
  } else {
    if (_0x46aff5 === "confirm") {
      if (_0x74ee8f.length === 0x0) {
        return await _0x4637fa.answerCbQuery("⚠️ *Jumlah saldo tidak boleh kosong!*", {
          'show_alert': true
        });
      }
      try {
        await updateUserSaldo(_0x2c63bd.userId, _0x74ee8f);
        _0x4637fa.reply("✅ *Saldo user berhasil ditambahkan.*\n\n📄 *Detail Saldo:*\n- Jumlah Saldo: *Rp " + _0x74ee8f + '*', {
          'parse_mode': "Markdown"
        });
      } catch (_0x18e419) {
        _0x4637fa.reply("❌ *Terjadi kesalahan saat menambahkan saldo user.*", {
          'parse_mode': "Markdown"
        });
      }
      delete userState[_0x4637fa.chat.id];
      return;
    } else {
      if (!/^[0-9]+$/.test(_0x46aff5)) {
        return await _0x4637fa.answerCbQuery("⚠️ *Jumlah saldo tidak valid!*", {
          'show_alert': true
        });
      }
      if (_0x74ee8f.length < 0xa) {
        _0x74ee8f += _0x46aff5;
      } else {
        return await _0x4637fa.answerCbQuery("⚠️ *Jumlah saldo maksimal adalah 10 karakter!*", {
          'show_alert': true
        });
      }
    }
  }
  _0x2c63bd.saldo = _0x74ee8f;
  const _0x5e149f = "📊 *Silahkan masukkan jumlah saldo yang ingin ditambahkan:*\n\nJumlah saldo saat ini: *" + _0x74ee8f + '*';
  if (_0x5e149f !== _0x4637fa.callbackQuery.message.text) {
    await _0x4637fa.editMessageText(_0x5e149f, {
      'reply_markup': {
        'inline_keyboard': keyboard_nomor()
      },
      'parse_mode': "Markdown"
    });
  }
}
async function handleEditBatasCreateAkun(_0x302450, _0x5509c4, _0x4e53d9) {
  await handleEditField(_0x302450, _0x5509c4, _0x4e53d9, "batasCreateAkun", "batas create akun", "UPDATE Server SET batas_create_akun = ? WHERE id = ?");
}
async function handleEditTotalCreateAkun(_0x5d6610, _0xd39661, _0x3720d1) {
  await handleEditField(_0x5d6610, _0xd39661, _0x3720d1, "totalCreateAkun", "total create akun", "UPDATE Server SET total_create_akun = ? WHERE id = ?");
}
async function handleEditiplimit(_0x3b92ef, _0x263a05, _0x7f36fd) {
  await handleEditField(_0x3b92ef, _0x263a05, _0x7f36fd, "iplimit", "limit IP", "UPDATE Server SET iplimit = ? WHERE id = ?");
}
async function handleEditQuota(_0x2ffc57, _0x24c81d, _0x260bfc) {
  await handleEditField(_0x2ffc57, _0x24c81d, _0x260bfc, "quota", "quota", "UPDATE Server SET quota = ? WHERE id = ?");
}
async function handleEditAuth(_0x34caaa, _0x4f66a6, _0x44973b) {
  await handleEditField(_0x34caaa, _0x4f66a6, _0x44973b, 'auth', 'auth', "UPDATE Server SET auth = ? WHERE id = ?");
}
async function handleEditDomain(_0x504699, _0x4dc61a, _0x585abb) {
  await handleEditField(_0x504699, _0x4dc61a, _0x585abb, "domain", "domain", "UPDATE Server SET domain = ? WHERE id = ?");
}
async function handleEditHarga(_0x32e34c, _0x533ac8, _0x519c4c) {
  let _0x45d280 = _0x533ac8.amount || '';
  if (_0x519c4c === "delete") {
    _0x45d280 = _0x45d280.slice(0x0, -0x1);
  } else {
    if (_0x519c4c === "confirm") {
      if (_0x45d280.length === 0x0) {
        return await _0x32e34c.answerCbQuery("⚠️ *Jumlah tidak boleh kosong!*", {
          'show_alert': true
        });
      }
      const _0xc29b4e = parseFloat(_0x45d280);
      if (isNaN(_0xc29b4e) || _0xc29b4e <= 0x0) {
        return _0x32e34c.reply("❌ *Harga tidak valid. Masukkan angka yang valid.*", {
          'parse_mode': "Markdown"
        });
      }
      try {
        await updateServerField(_0x533ac8.serverId, _0xc29b4e, "UPDATE Server SET harga = ? WHERE id = ?");
        _0x32e34c.reply("✅ *Harga server berhasil diupdate.*\n\n📄 *Detail Server:*\n- Harga Baru: *Rp " + _0xc29b4e + '*', {
          'parse_mode': "Markdown"
        });
      } catch (_0x1123f7) {
        _0x32e34c.reply("❌ *Terjadi kesalahan saat mengupdate harga server.*", {
          'parse_mode': "Markdown"
        });
      }
      delete userState[_0x32e34c.chat.id];
      return;
    } else {
      if (!/^\d+$/.test(_0x519c4c)) {
        return await _0x32e34c.answerCbQuery("⚠️ *Hanya angka yang diperbolehkan!*", {
          'show_alert': true
        });
      }
      if (_0x45d280.length < 0xc) {
        _0x45d280 += _0x519c4c;
      } else {
        return await _0x32e34c.answerCbQuery("⚠️ *Jumlah maksimal adalah 12 digit!*", {
          'show_alert': true
        });
      }
    }
  }
  _0x533ac8.amount = _0x45d280;
  const _0x3a9c2f = "💰 *Silahkan masukkan harga server baru:*\n\nJumlah saat ini: *Rp " + _0x45d280 + '*';
  if (_0x3a9c2f !== _0x32e34c.callbackQuery.message.text) {
    await _0x32e34c.editMessageText(_0x3a9c2f, {
      'reply_markup': {
        'inline_keyboard': keyboard_nomor()
      },
      'parse_mode': "Markdown"
    });
  }
}
async function handleEditNama(_0xd9ef50, _0x34f447, _0x230b89) {
  await handleEditField(_0xd9ef50, _0x34f447, _0x230b89, 'name', "nama server", "UPDATE Server SET nama_server = ? WHERE id = ?");
}
async function handleEditField(_0x2b09e6, _0x2fdc41, _0x3d31cc, _0x368bb5, _0x3f7945, _0xd80ffc) {
  let _0x10d8ea = _0x2fdc41[_0x368bb5] || '';
  if (_0x3d31cc === "delete") {
    _0x10d8ea = _0x10d8ea.slice(0x0, -0x1);
  } else {
    if (_0x3d31cc === "confirm") {
      if (_0x10d8ea.length === 0x0) {
        return await _0x2b09e6.answerCbQuery("⚠️ *" + _0x3f7945 + " tidak boleh kosong!*", {
          'show_alert': true
        });
      }
      try {
        await updateServerField(_0x2fdc41.serverId, _0x10d8ea, _0xd80ffc);
        _0x2b09e6.reply("✅ *" + _0x3f7945 + " server berhasil diupdate.*\n\n📄 *Detail Server:*\n- " + (_0x3f7945.charAt(0x0).toUpperCase() + _0x3f7945.slice(0x1)) + ": *" + _0x10d8ea + '*', {
          'parse_mode': "Markdown"
        });
      } catch (_0x403994) {
        _0x2b09e6.reply("❌ *Terjadi kesalahan saat mengupdate " + _0x3f7945 + " server.*", {
          'parse_mode': "Markdown"
        });
      }
      delete userState[_0x2b09e6.chat.id];
      return;
    } else {
      if (!/^[a-zA-Z0-9.-]+$/.test(_0x3d31cc)) {
        return await _0x2b09e6.answerCbQuery("⚠️ *" + _0x3f7945 + " tidak valid!*", {
          'show_alert': true
        });
      }
      if (_0x10d8ea.length < 0xfd) {
        _0x10d8ea += _0x3d31cc;
      } else {
        return await _0x2b09e6.answerCbQuery("⚠️ *" + _0x3f7945 + " maksimal adalah 253 karakter!*", {
          'show_alert': true
        });
      }
    }
  }
  _0x2fdc41[_0x368bb5] = _0x10d8ea;
  const _0x2aac1a = "📊 *Silahkan masukkan " + _0x3f7945 + " server baru:*\n\n" + (_0x3f7945.charAt(0x0).toUpperCase() + _0x3f7945.slice(0x1)) + " saat ini: *" + _0x10d8ea + '*';
  if (_0x2aac1a !== _0x2b09e6.callbackQuery.message.text) {
    await _0x2b09e6.editMessageText(_0x2aac1a, {
      'reply_markup': {
        'inline_keyboard': keyboard_nomor()
      },
      'parse_mode': 'Markdown'
    });
  }
}
async function updateUserSaldo(_0x34ec45, _0x5dc34d) {
  return new Promise((_0x59cae8, _0x20e233) => {
    db.run("UPDATE Users SET saldo = saldo + ? WHERE id = ?", [_0x5dc34d, _0x34ec45], function (_0x3eb082) {
      if (_0x3eb082) {
        logger.error("⚠️ Kesalahan saat menambahkan saldo user:", _0x3eb082.message);
        _0x20e233(_0x3eb082);
      } else {
        _0x59cae8();
      }
    });
  });
}
async function updateServerField(_0x5edc4b, _0x528411, _0x91cccd) {
  return new Promise((_0x5b19e8, _0x52dc45) => {
    db.run(_0x91cccd, [_0x528411, _0x5edc4b], function (_0x39040c) {
      if (_0x39040c) {
        logger.error("⚠️ Kesalahan saat mengupdate server field:", _0x39040c.message);
        _0x52dc45(_0x39040c);
      } else {
        _0x5b19e8();
      }
    });
  });
}
function generateRandomAmount(_0x5f4a1d) {
  const _0x1292e9 = Math.floor(Math.random() * 0x63) + 0x1;
  return _0x5f4a1d + _0x1292e9;
}
global.depositState = {};
global.pendingDeposits = {};
let lastRequestTime = 0x0;
db.all("SELECT * FROM pending_deposits WHERE status = \"pending\"", [], (_0x26c83d, _0x4ff3a1) => {
  if (_0x26c83d) {
    logger.error("Gagal load pending_deposits:", _0x26c83d.message);
    return;
  }
  _0x4ff3a1.forEach(_0x4e9ca5 => {
    global.pendingDeposits[_0x4e9ca5.unique_code] = {
      'amount': _0x4e9ca5.amount,
      'originalAmount': _0x4e9ca5.original_amount,
      'userId': _0x4e9ca5.user_id,
      'username': _0x4e9ca5.username,
      'timestamp': _0x4e9ca5.timestamp,
      'status': _0x4e9ca5.status,
      'qrMessageId': _0x4e9ca5.qr_message_id
    };
  });
  logger.info("Pending deposit loaded:", Object.keys(global.pendingDeposits).length);
});
const config = {
  'storeName': NAMA_STORE,
  'auth_username': MERCHANT_ID,
  'auth_token': API_KEY,
  'baseQrString': DATA_QRIS,
  'logoPath': "logo.png"
};
const qris = new QRISPayment(config);
async function processDeposit(_0x566654, _0x299ca8) {
  const _0x53b030 = Date.now();
  if (_0x53b030 - lastRequestTime < 0x3e8) {
    await _0x566654.reply("⚠️ *Terlalu banyak permintaan. Silahkan tunggu sebentar sebelum mencoba lagi.*", {
      'parse_mode': 'Markdown'
    });
    return;
  }
  lastRequestTime = _0x53b030;
  const _0xf8bc2f = _0x566654.from.id;
  const _0x3737a6 = "user-" + _0xf8bc2f + '-' + _0x53b030;
  const _0x821433 = generateRandomAmount(parseInt(_0x299ca8));
  if (!global.pendingDeposits) {
    global.pendingDeposits = {};
  }
  try {
    let _0x213f70 = await _0x566654.reply("⏳ Mohon menunggu.");
    const _0x5ee914 = ['.', '..', "...", " "];
    let _0x174f5b = 0x0;
    const _0x1e48da = setInterval(async () => {
      _0x174f5b = (_0x174f5b + 0x1) % _0x5ee914.length;
      try {
        await _0x566654.telegram.editMessageText(_0x566654.chat.id, _0x213f70.message_id, null, "⏳ Mohon menunggu" + _0x5ee914[_0x174f5b]);
      } catch (_0xa0bce3) {
        clearInterval(_0x1e48da);
      }
    }, 0x3e8);
    await new Promise(_0x4d70c5 => setTimeout(_0x4d70c5, 0x1388));
    clearInterval(_0x1e48da);
    const {
      qrBuffer: _0x5ec064
    } = await qris.generateQR(_0x821433);
    const _0x327cfe = "🧾 *Pembayaran:*\n\n" + ("💵 Nominal: Rp " + _0x821433 + "\n") + "⏳ Batas: 5 menit\n" + "⚠️ Transfer *harus* sesuai\n\n" + "✅ Otomatis terverifikasi\n" + "📌 Jangan tutup halaman ini";
    const _0x1d9809 = [[{
      'text': "📢 Join Channel",
      'url': "https://t.me/pgetunnel"
    }], [{
      'text': "❌ Batal Topup",
      'callback_data': "batal_topup_" + _0x3737a6
    }]];
    const _0x1e2d35 = await _0x566654.replyWithPhoto({
      'source': _0x5ec064
    }, {
      'caption': _0x327cfe,
      'parse_mode': 'Markdown',
      'reply_markup': {
        'inline_keyboard': _0x1d9809
      }
    });
    await _0x566654.deleteMessage(_0x213f70.message_id);
    global.pendingDeposits[_0x3737a6] = {
      'amount': _0x821433,
      'originalAmount': _0x299ca8,
      'userId': _0xf8bc2f,
      'username': _0x566654.from.username || "user_" + _0x566654.from.id,
      'timestamp': Date.now(),
      'status': "pending",
      'qrMessageId': _0x1e2d35.message_id
    };
    await insertPendingDeposit(_0x3737a6, _0xf8bc2f, _0x566654.from.username || "user_" + _0x566654.from.id, _0x821433, _0x299ca8, _0x1e2d35.message_id);
    delete global.depositState[_0xf8bc2f];
  } catch (_0x43b33e) {
    logger.error("❌ Kesalahan saat memproses deposit:", _0x43b33e);
    if (global.depositState && global.depositState[_0xf8bc2f]) {
      delete global.depositState[_0xf8bc2f];
    }
    if (global.pendingDeposits && global.pendingDeposits[_0x3737a6]) {
      delete global.pendingDeposits[_0x3737a6];
    }
    await deletePendingDeposit(_0x3737a6);
    await _0x566654.reply("❌ *GAGAL! Terjadi kesalahan saat memproses pembayaran. Silahkan coba lagi nanti.*", {
      'parse_mode': 'Markdown'
    });
  }
}
function insertPendingDeposit(_0x49659d, _0x45ce35, _0x5e78d3, _0x368ef8, _0x4962d6, _0x596699) {
  return new Promise((_0x437e6b, _0x91675a) => {
    db.run("INSERT INTO pending_deposits (unique_code, user_id, username, amount, original_amount, timestamp, status, qr_message_id)\n       VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [_0x49659d, _0x45ce35, _0x5e78d3, _0x368ef8, _0x4962d6, Date.now(), 'pending', _0x596699], _0x5d7cf8 => {
      if (_0x5d7cf8) {
        logger.error("Gagal insert pending_deposits:", _0x5d7cf8.message);
        _0x91675a(_0x5d7cf8);
      } else {
        _0x437e6b();
      }
    });
  });
}
function deletePendingDeposit(_0xd3b24) {
  return new Promise((_0x223143, _0x457c97) => {
    db.run("DELETE FROM pending_deposits WHERE unique_code = ?", [_0xd3b24], _0x577e64 => {
      if (_0x577e64) {
        logger.error("Gagal hapus pending_deposits (error):", _0x577e64.message);
        _0x457c97(_0x577e64);
      } else {
        _0x223143();
      }
    });
  });
}
async function checkQRISStatus() {
  try {
    const _0x544b34 = Object.entries(global.pendingDeposits);
    for (const [_0x4d76fb, _0x5050a0] of _0x544b34) {
      if (_0x5050a0.status !== "pending") {
        continue;
      }
      const _0xf3a2f1 = Date.now() - _0x5050a0.timestamp;
      if (_0xf3a2f1 > 300000) {
        try {
          if (_0x5050a0.qrMessageId) {
            await bot.telegram.deleteMessage(_0x5050a0.userId, _0x5050a0.qrMessageId);
          }
          await bot.telegram.sendMessage(_0x5050a0.userId, "❌ *Pembayaran Expired*\n\nWaktu pembayaran telah habis. Silahkan klik Top Up lagi untuk mendapatkan QR baru.", {
            'parse_mode': "Markdown"
          });
        } catch (_0x5da1c3) {
          logger.error("Error deleting expired payment messages:", _0x5da1c3);
        }
        delete global.pendingDeposits[_0x4d76fb];
        db.run("DELETE FROM pending_deposits WHERE unique_code = ?", [_0x4d76fb], _0x1d8332 => {
          if (_0x1d8332) {
            logger.error("Gagal hapus pending_deposits (expired):", _0x1d8332.message);
          }
        });
        continue;
      }
      try {
        const _0xf2cacb = await qris.checkPayment(_0x4d76fb, _0x5050a0.amount);
        if (_0xf2cacb.success && _0xf2cacb.data.status === "PAID") {
          const _0x21f852 = _0xf2cacb.data.reference + '_' + _0xf2cacb.data.amount;
          if (global.processedTransactions.has(_0x21f852)) {
            logger.info("Transaction " + _0x21f852 + " already processed, skipping...");
            continue;
          }
          if (parseInt(_0xf2cacb.data.amount) !== _0x5050a0.amount) {
            logger.info("Amount mismatch for " + _0x4d76fb + ": expected " + _0x5050a0.amount + ", got " + _0xf2cacb.data.amount);
            continue;
          }
          const _0x2fee49 = await processMatchingPayment(_0x5050a0, _0xf2cacb.data, _0x4d76fb);
          if (_0x2fee49) {
            logger.info("Payment processed successfully for " + _0x4d76fb);
            delete global.pendingDeposits[_0x4d76fb];
            db.run("DELETE FROM pending_deposits WHERE unique_code = ?", [_0x4d76fb], _0x5d21ae => {
              if (_0x5d21ae) {
                logger.error("Gagal hapus pending_deposits (success):", _0x5d21ae.message);
              }
            });
          }
        }
      } catch (_0x28c63e) {
        logger.error("Error checking payment status for " + _0x4d76fb + ':', _0x28c63e.message);
      }
    }
  } catch (_0x528343) {
    logger.error("Error in checkQRISStatus:", _0x528343);
  }
}
function keyboard_abc() {
  const _0x111be7 = [];
  for (let _0x373c20 = 0x0; _0x373c20 < "abcdefghijklmnopqrstuvwxyz".length; _0x373c20 += 0x3) {
    const _0x525dfb = "abcdefghijklmnopqrstuvwxyz".slice(_0x373c20, _0x373c20 + 0x3).split('').map(_0x3899bb => ({
      'text': _0x3899bb,
      'callback_data': _0x3899bb
    }));
    _0x111be7.push(_0x525dfb);
  }
  _0x111be7.push([{
    'text': "🔙 Hapus",
    'callback_data': "delete"
  }, {
    'text': "✅ Konfirmasi",
    'callback_data': "confirm"
  }]);
  _0x111be7.push([{
    'text': "🔙 Kembali ke Menu Utama",
    'callback_data': "send_main_menu"
  }]);
  return _0x111be7;
}
function keyboard_nomor() {
  const _0x4119b7 = [];
  for (let _0x1963cd = 0x0; _0x1963cd < "1234567890".length; _0x1963cd += 0x3) {
    const _0x2c0725 = "1234567890".slice(_0x1963cd, _0x1963cd + 0x3).split('').map(_0x55264f => ({
      'text': _0x55264f,
      'callback_data': _0x55264f
    }));
    _0x4119b7.push(_0x2c0725);
  }
  _0x4119b7.push([{
    'text': "🔙 Hapus",
    'callback_data': "delete"
  }, {
    'text': "✅ Konfirmasi",
    'callback_data': 'confirm'
  }]);
  _0x4119b7.push([{
    'text': "🔙 Kembali ke Menu Utama",
    'callback_data': "send_main_menu"
  }]);
  return _0x4119b7;
}
function keyboard_full() {
  const _0x3ab428 = [];
  for (let _0x3d14c7 = 0x0; _0x3d14c7 < "abcdefghijklmnopqrstuvwxyz0123456789".length; _0x3d14c7 += 0x3) {
    const _0x397e52 = "abcdefghijklmnopqrstuvwxyz0123456789".slice(_0x3d14c7, _0x3d14c7 + 0x3).split('').map(_0x4001f8 => ({
      'text': _0x4001f8,
      'callback_data': _0x4001f8
    }));
    _0x3ab428.push(_0x397e52);
  }
  _0x3ab428.push([{
    'text': "🔙 Hapus",
    'callback_data': "delete"
  }, {
    'text': "✅ Konfirmasi",
    'callback_data': 'confirm'
  }]);
  _0x3ab428.push([{
    'text': "🔙 Kembali ke Menu Utama",
    'callback_data': "send_main_menu"
  }]);
  return _0x3ab428;
}
global.processedTransactions = new Set();
async function updateUserBalance(_0xc43b36, _0x1777ca) {
  return new Promise((_0x44ed70, _0x5eec46) => {
    db.run("UPDATE users SET saldo = saldo + ? WHERE user_id = ?", [_0x1777ca, _0xc43b36], function (_0x4d6140) {
      if (_0x4d6140) {
        logger.error("Kesalahan saat mengupdate saldo pengguna:", _0x4d6140.message);
        _0x5eec46(_0x4d6140);
        return;
      }
      _0x44ed70(this.changes);
    });
  });
}
async function getUserBalance(_0x21ff20) {
  return new Promise((_0x278d3c, _0x5b72ba) => {
    db.get("SELECT saldo FROM users WHERE user_id = ?", [_0x21ff20], (_0x11c4ac, _0x5a57dd) => {
      if (_0x11c4ac) {
        _0x5b72ba(_0x11c4ac);
        return;
      }
      _0x278d3c(_0x5a57dd);
    });
  });
}
function getBotGroupData() {
  try {
    if (!groupId || !BOT_TOKEN) {
      logger.warn("❌ Konfigurasi grup tidak lengkap di .vars.json (GROUP_CHAT_ID atau BOT_TOKEN kosong). Notifikasi grup mungkin tidak berfungsi.");
      return null;
    }
    return {
      'keyGroup': BOT_TOKEN,
      'chatId': groupId
    };
  } catch (_0x13ac09) {
    logger.error("❌ Terjadi kesalahan saat mendapatkan data grup:", _0x13ac09.message);
    return null;
  }
}
async function getIspNameFromExternalSource(_0xc062eb) {
  if (!_0xc062eb || _0xc062eb === '-') {
    return "N/A";
  }
  try {
    const _0x27d795 = await axios.get("http://ip-api.com/json/" + _0xc062eb + "?fields=isp");
    if (_0x27d795.data && _0x27d795.data.isp) {
      return _0x27d795.data.isp;
    }
    return "Unknown ISP";
  } catch (_0x568d8f) {
    logger.error("❌ Gagal mengambil ISP untuk " + _0xc062eb + ':', _0x568d8f.message);
    return "Failed to get ISP";
  }
}
function censorAccountUsername(_0x32bbfd) {
  if (!_0x32bbfd || typeof _0x32bbfd !== "string") {
    return 'N/A';
  }
  if (_0x32bbfd.length <= 0x3) {
    return _0x32bbfd + "xxx";
  }
  return _0x32bbfd.substring(0x0, 0x3) + "xxx";
}
async function sendTransactionLogToGroup({
  trxNumber: _0xf0b0ff,
  userRole: _0x124af7,
  tgUsername: _0x12c999,
  tgUserId: _0x59be8f,
  serverName: _0x3f51e9,
  ispName: _0xc68b4e,
  domainName: _0x2450d4,
  accountUsername: _0x5da8e8,
  serviceName: _0x1c2b1f,
  limitQuota: _0x142245,
  limitLogin: _0x279d34,
  trxType: _0x581909,
  activeDays: _0x5d0e5d,
  costValue: _0x9631f5,
  hargaNormalPerHari: _0x1da109,
  saldoDikurangi: _0x340e41,
  userSaldoNow: _0x3e5080,
  dateLabel: _0xa0a0a1,
  timeLabel: _0x1826ee
}) {
  const _0x4e65d2 = getBotGroupData();
  if (!_0x4e65d2 || !_0x4e65d2.chatId || !_0x4e65d2.keyGroup) {
    logger.warn("❌ Data grup tidak lengkap (chatId atau keyGroup), notifikasi tidak dikirim.");
    return;
  }
  let _0x36e04b = '';
  let _0x272fc0 = '';
  if (_0x124af7 === "admin") {
    _0x36e04b = '👑';
    _0x272fc0 = 'Admin';
  } else if (_0x124af7 === "reseller") {
    _0x36e04b = '🏆';
    _0x272fc0 = "Reseller";
  } else {
    _0x36e04b = '👤';
    _0x272fc0 = 'Member';
  }
  const _0x4b491f = censorAccountUsername(_0x5da8e8);
  const _0x194eec = "\n<b>━━━━━━━━━━━━━━━━━━</b>\n<b>❇️ Transaksi Berhasil ❇️</b>\n<b>━━━━━━━━━━━━━━━━━━</b>\n📒 <b>» No Trx:</b> #" + _0xf0b0ff + "\n🌀 <b>» Status:</b> " + _0x272fc0 + " " + _0x36e04b + "\n♂️ <b>» Username:</b> " + _0x12c999 + "\n📋 <b>» ID:</b> <code>" + _0x59be8f + "</code>\n🏷️ <b>» Server:</b> " + _0x3f51e9 + "\n🏷️ <b>» ISP :</b> " + _0xc68b4e + "\n🏷️ <b>» Domain / IP :</b> <code>" + _0x2450d4 + "</code>\n🏷️ <b>» Nama :</b> " + _0x4b491f + "\n🏷️ <b>» Produk:</b> " + _0x1c2b1f + "\n🏷️ <b>» Limit Quota :</b> " + _0x142245 + " GB\n🏷️ <b>» Limit Login :</b> " + _0x279d34 + " Hp\n🏷️ <b>» Type:</b> " + _0x581909 + "\n🏷️ <b>» Durasi akun:</b> " + _0x5d0e5d + " Hari Rp." + _0x9631f5.toLocaleString('id-ID') + "\n🏷️ <b>» Harga Normal Perhari:</b> Rp." + _0x1da109.toLocaleString('id-ID') + "\n🏷️ <b>» Saldo di kurangi:</b> Rp." + _0x340e41.toLocaleString('id-ID') + "\n🏷️ <b>» Saldo saat ini:</b> Rp." + _0x3e5080.toLocaleString("id-ID") + "\n🏷️ <b>» Tanggal:</b> " + _0xa0a0a1 + "\n🏷️ <b>» Waktu:</b> " + _0x1826ee + "\n<b>━━━━━━━━━━━━━━━━━━</b>\n";
  try {
    await axios.post("https://api.telegram.org/bot" + _0x4e65d2.keyGroup + "/sendMessage", {
      'chat_id': _0x4e65d2.chatId,
      'text': _0x194eec,
      'parse_mode': "HTML"
    });
    logger.info("✅ Log transaksi #" + _0xf0b0ff + " dikirim ke grup " + _0x4e65d2.chatId);
  } catch (_0x4c07ff) {
    logger.error("❌ Gagal kirim log transaksi ke grup: " + (_0x4c07ff.response?.["data"]?.["description"] || _0x4c07ff.message));
  }
}
async function afterAccountTransaction({
  userId: _0x176eb1,
  username: _0x169876,
  produk: _0x4a4d28,
  serverId: _0x4fe5db,
  jenis: _0x431f36,
  durasi: _0x4f22ba,
  accountUsername: _0x59e5df
}) {
  try {
    const _0x2c4043 = new Date();
    const _0x4df282 = await new Promise((_0x5deaa0, _0x27e0a4) => {
      db.get("SELECT nama_server, harga, domain, quota, iplimit FROM Server WHERE id = ?", [_0x4fe5db], (_0x12c2d6, _0x42c4c4) => {
        if (_0x12c2d6) {
          logger.error("❌ Gagal mengambil data server:", _0x12c2d6.message);
          return _0x27e0a4(_0x12c2d6);
        }
        _0x5deaa0(_0x42c4c4 || {});
      });
    });
    const _0x1784cb = _0x4df282.nama_server || '-';
    const _0x1ed771 = _0x4df282.harga || 0x0;
    const _0x37890a = _0x4df282.domain || '-';
    const _0x1fef5f = _0x4df282.quota || 0x0;
    const _0x27810a = _0x4df282.iplimit || 0x0;
    const _0x402d1f = await getIspNameFromExternalSource(_0x37890a);
    let _0x447d55 = _0x1ed771 * _0x4f22ba;
    const _0x196ed4 = await new Promise(_0x2c118a => {
      db.get("SELECT role FROM users WHERE user_id = ?", [_0x176eb1], (_0x2fcf9e, _0x2bbd00) => {
        _0x2c118a(_0x2bbd00 ? _0x2bbd00.role : 'member');
      });
    });
    if (_0x196ed4 === "reseller") {
      const _0x17c8ae = await new Promise(_0x137747 => {
        db.get("SELECT discount_percent FROM reseller_config WHERE id = 1", (_0x424d90, _0xcbed4c) => {
          if (_0x424d90) {
            reject(_0x424d90);
          } else {
            _0x137747(_0xcbed4c ? _0xcbed4c.discount_percent : 0x0);
          }
        });
      });
      _0x447d55 = Math.floor(_0x447d55 * (0x64 - _0x17c8ae) / 0x64);
    }
    const _0x492d6f = await getLastTransactionNumber();
    const _0x861ed8 = await getUserSaldo(_0x176eb1);
    const _0x423fb4 = _0x2c4043.toLocaleDateString("id-ID", {
      'day': "2-digit",
      'month': "2-digit",
      'year': "numeric"
    }).replace(/\//g, '.');
    const _0x127ed3 = _0x2c4043.toLocaleTimeString("id-ID", {
      'hour': "2-digit",
      'minute': '2-digit'
    }).replace(/\./g, ':') + " WIB";
    await sendTransactionLogToGroup({
      'trxNumber': _0x492d6f,
      'userRole': ADMIN.includes(_0x176eb1) ? 'admin' : _0x196ed4,
      'tgUsername': _0x169876 ? _0x169876.startsWith('@') ? _0x169876 : '@' + _0x169876 : "Tidak tersedia",
      'tgUserId': _0x176eb1,
      'serverName': _0x1784cb,
      'ispName': _0x402d1f,
      'domainName': _0x37890a,
      'accountUsername': _0x59e5df,
      'serviceName': _0x4a4d28 || "Tidak diketahui",
      'limitQuota': _0x1fef5f,
      'limitLogin': _0x27810a,
      'trxType': _0x431f36 || "Create",
      'activeDays': _0x4f22ba || 0x0,
      'costValue': _0x447d55 || 0x0,
      'hargaNormalPerHari': _0x1ed771 || 0x0,
      'saldoDikurangi': _0x447d55 || 0x0,
      'userSaldoNow': _0x861ed8 || 0x0,
      'dateLabel': _0x423fb4,
      'timeLabel': _0x127ed3
    });
    logger.info("✅ afterAccountTransaction selesai untuk user " + _0x176eb1 + ", transaksi #" + _0x492d6f);
  } catch (_0xa568b1) {
    logger.error("❌ Error afterAccountTransaction user " + _0x176eb1 + ':', _0xa568b1?.['stack'] || _0xa568b1?.["message"] || _0xa568b1);
  }
}
function getLastTransactionNumber() {
  return new Promise((_0x2593b2, _0x4c46dc) => {
    db.get("SELECT id FROM log_penjualan ORDER BY id DESC LIMIT 1", (_0x56aced, _0x4a29d6) => {
      if (_0x56aced) {
        return _0x4c46dc(_0x56aced);
      }
      _0x2593b2(_0x4a29d6 ? _0x4a29d6.id + 0x1 : 0x3e8);
    });
  });
}
function getUserSaldo(_0xf0763c) {
  return new Promise((_0x227ace, _0x30c709) => {
    db.get("SELECT saldo FROM users WHERE user_id = ?", [_0xf0763c], (_0x303cd, _0x280ed7) => {
      if (_0x303cd) {
        return _0x30c709(_0x303cd);
      }
      _0x227ace(_0x280ed7 ? _0x280ed7.saldo : 0x0);
    });
  });
}
async function sendPaymentSuccessNotificationByUserId(_0x3e1bf4, _0x5479c3, _0x34d69d, _0x3f0f91 = "Tidak tersedia") {
  try {
    const _0x41dcf9 = await new Promise((_0x189200, _0x3f47af) => {
      db.get("SELECT saldo FROM users WHERE user_id = ?", [_0x3e1bf4], (_0x34dfda, _0x1d89c2) => {
        if (_0x34dfda) {
          _0x3f47af(_0x34dfda);
        } else {
          _0x189200(_0x1d89c2 ? _0x1d89c2.saldo : 0x0);
        }
      });
    });
    const _0x2126a6 = _0x5479c3.bonus && _0x5479c3.bonus > 0x0 && _0x5479c3.bonus_percent;
    const _0x4b85fd = _0x2126a6 ? "🎁 Bonus Top Up: *Rp" + _0x5479c3.bonus + "* (" + _0x5479c3.bonus_percent + "%)\n" : '';
    const _0x15eef3 = "━━━━━━━━━━━━━━━━━━\n✅ *Pembayaran Berhasil ✅*\n━━━━━━━━━━━━━━━━━━\n" + ("🏷️ *» Username:* `" + _0x3f0f91 + "`\n") + ("🏷️ *» ID Pengguna:* `" + _0x3e1bf4 + "`\n") + ("🏷️ *» Nominal:* Rp " + _0x5479c3.amount + "\n") + ("🏷️ *» Saldo Ditambahkan:* Rp " + _0x5479c3.originalAmount + "\n") + _0x4b85fd + ("🏷️ *» Saldo Sekarang:* Rp " + _0x41dcf9.toLocaleString("id-ID"));
    await bot.telegram.sendMessage(_0x3e1bf4, _0x15eef3, {
      'parse_mode': 'Markdown',
      'reply_markup': {
        'inline_keyboard': [[{
          'text': "💸 Top Up",
          'callback_data': "menu_topup"
        }, {
          'text': "📝 Menu Utama",
          'callback_data': "send_main_menu"
        }]]
      }
    });
    if (_0x5479c3.qrMessageId) {
      try {
        await bot.telegram.deleteMessage(_0x3e1bf4, _0x5479c3.qrMessageId);
      } catch (_0x14f2d8) {
        logger.warn("Gagal hapus pesan QRIS user " + _0x3e1bf4 + " (message_id " + _0x5479c3.qrMessageId + "): " + _0x14f2d8.message);
      }
    }
    const _0x5141d7 = getBotGroupData();
    if (_0x5141d7) {
      const {
        keyGroup: _0x3730cb,
        chatId: _0x1642db
      } = _0x5141d7;
      const _0x2187d0 = "━━━━━━━━━━━━━━━━━━\n❇️ *Top Up Berhasil* ❇️\n━━━━━━━━━━━━━━━━━━\n" + ("🏷️ *» Username:* `@" + _0x3f0f91 + "`\n") + ("🏷️ *» ID:* `" + _0x3e1bf4 + "`\n") + ("🏷️ *» Nominal:* Rp" + _0x5479c3.amount.toLocaleString('id-ID') + "\n") + ("🏷️ *» Bonus Top Up:* Rp" + (_0x5479c3.bonus || 0x0).toLocaleString("id-ID") + " (" + (_0x5479c3.bonus_percent || 0x0) + "%)\n") + ("🏷️ *» Saldo Sekarang:* Rp" + _0x34d69d.toLocaleString('id-ID'));
      try {
        await axios.post("https://api.telegram.org/bot" + _0x3730cb + "/sendMessage", {
          'chat_id': _0x1642db,
          'text': _0x2187d0,
          'parse_mode': "Markdown"
        });
      } catch (_0xc81c27) {
        const _0x4db8a5 = "❗ Gagal kirim ke grup:\n" + (_0xc81c27.response?.['data']?.["description"] || _0xc81c27.message);
        logger.warn(_0x4db8a5);
        await bot.telegram.sendMessage(_0x3e1bf4, "⚠️ *Gagal kirim notifikasi ke grup.*\n\n" + _0x4db8a5, {
          'parse_mode': "Markdown"
        });
      }
    }
    return true;
  } catch (_0xaab429) {
    logger.error("❌ Error sending payment notification (by userId):", _0xaab429);
    return false;
  }
}
async function processMatchingPayment(_0x37042d, _0x2a430e, _0x4110e3) {
  if (!_0x37042d.username) {
    try {
      const _0x5a7831 = await bot.telegram.getChat(_0x37042d.userId);
      _0x37042d.username = _0x5a7831.username ? '@' + _0x5a7831.username : "Tidak tersedia";
    } catch (_0x231c88) {
      _0x37042d.username = "Tidak tersedia";
    }
  }
  const _0x1b5d24 = _0x2a430e.reference_id + '_' + _0x2a430e.amount;
  if (global.processedTransactions.has(_0x1b5d24)) {
    logger.info("Transaction " + _0x1b5d24 + " already processed, skipping...");
    return false;
  }
  try {
    logger.info("Update saldo untuk user " + _0x37042d.userId + ", amount: " + _0x37042d.originalAmount);
    await updateUserBalance(_0x37042d.userId, Number(_0x37042d.originalAmount));
    const _0x35626c = await new Promise((_0x3c6c96, _0x1a519b) => {
      db.get("SELECT * FROM bonus_config WHERE id = 1", (_0x145d10, _0x32aeec) => {
        if (_0x145d10) {
          _0x1a519b(_0x145d10);
        } else {
          _0x3c6c96(_0x32aeec);
        }
      });
    });
    let _0x5ce947 = 0x0;
    let _0x18cd9c = 0x0;
    if (_0x35626c?.["enabled"] && _0x37042d.originalAmount >= _0x35626c.min_topup) {
      _0x5ce947 = Math.floor(_0x37042d.originalAmount * _0x35626c.bonus_percent / 0x64);
      _0x18cd9c = _0x35626c.bonus_percent;
      _0x37042d.bonus = _0x5ce947;
      _0x37042d.bonus_percent = _0x18cd9c;
      await prosesBonusTopUp(_0x37042d.userId, _0x37042d.username, _0x37042d.originalAmount);
    } else {
      _0x37042d.bonus = 0x0;
      _0x37042d.bonus_percent = 0x0;
    }
    await logTopup(_0x37042d.userId, _0x37042d.username, _0x37042d.originalAmount, "QRIS Orkut");
    const _0x498dcc = await new Promise((_0x28a928, _0xaa5c6a) => {
      db.get("SELECT saldo FROM users WHERE user_id = ?", [_0x37042d.userId], (_0x135bb0, _0x374028) => {
        if (_0x135bb0) {
          _0xaa5c6a(_0x135bb0);
        } else {
          _0x28a928(_0x374028);
        }
      });
    });
    if (!_0x498dcc) {
      throw new Error("User balance not found after update");
    }
    const _0x11f0e2 = await sendPaymentSuccessNotificationByUserId(_0x37042d.userId, {
      'amount': _0x37042d.originalAmount,
      'originalAmount': _0x37042d.originalAmount,
      'bonus': _0x37042d.bonus,
      'bonus_percent': _0x37042d.bonus_percent,
      'qrMessageId': _0x37042d.qrMessageId
    }, _0x498dcc.saldo, _0x37042d.username);
    if (_0x11f0e2) {
      global.processedTransactions.add(_0x1b5d24);
      delete global.pendingDeposits[_0x4110e3];
      db.run("DELETE FROM pending_deposits WHERE unique_code = ?", [_0x4110e3], _0x4e7456 => {
        if (_0x4e7456) {
          logger.error("Gagal hapus pending_deposits (success):", _0x4e7456.message);
        }
      });
      return true;
    }
    return false;
  } catch (_0x3deb45) {
    logger.error("❌ Error processing payment:", _0x3deb45);
    return false;
  }
}
setInterval(async () => {
  try {
    await checkQRISStatus();
  } catch (_0x124750) {
    logger.error("❌ Gagal cek status QRIS:", _0x124750.message);
  }
}, 0x2710);
async function kirimFileKeTelegram() {
  const _0x34f64f = new FormData();
  if (!fs.existsSync("/root/BotVPN/sellvpn.db")) {
    console.log("❌ File tidak ditemukan:", "/root/BotVPN/sellvpn.db");
    return;
  }
  _0x34f64f.append("chat_id", ADMIN);
  _0x34f64f.append("document", fs.createReadStream("/root/BotVPN/sellvpn.db"));
  try {
    const _0x37ac2c = await fetch("https://api.telegram.org/bot" + BOT_TOKEN + "/sendDocument", {
      'method': "POST",
      'body': _0x34f64f
    });
    const _0x472452 = await _0x37ac2c.json();
    if (_0x472452.ok) {
      console.log('[' + new Date().toLocaleTimeString() + "] ✅ File terkirim ke Telegram.");
    } else {
      console.error("❌ Gagal mengirim file:", _0x472452.description);
    }
  } catch (_0x3154bb) {
    console.error("❌ Error saat mengirim file:", _0x3154bb.message);
  }
}
setInterval(kirimFileKeTelegram, 7200000);
function resetUserSaldo(_0x2b433f) {
  return new Promise((_0x54f77c, _0x220400) => {
    db.run("UPDATE users SET saldo = 0 WHERE user_id = ? AND saldo > 0", [_0x2b433f], function (_0x379c08) {
      if (_0x379c08) {
        return _0x220400(_0x379c08);
      }
      _0x54f77c(this.changes > 0x0);
    });
  });
}
function getUserSaldoById(_0x4ad0ae) {
  return new Promise((_0x47420e, _0x33d7d1) => {
    db.get("SELECT user_id, saldo FROM users WHERE user_id = ?", [_0x4ad0ae], (_0x328cb6, _0x4f60eb) => {
      if (_0x328cb6) {
        return _0x33d7d1(_0x328cb6);
      }
      _0x47420e(_0x4f60eb || null);
    });
  });
}
function getUsersWithSaldo(_0x718a79, _0x527b3f) {
  return new Promise((_0x3e3a59, _0x223eaa) => {
    db.all("SELECT user_id, saldo FROM users WHERE saldo > 0 ORDER BY saldo DESC LIMIT ? OFFSET ?", [_0x718a79, _0x527b3f], (_0x5be864, _0xc9269e) => {
      if (_0x5be864) {
        return _0x223eaa(_0x5be864);
      }
      _0x3e3a59(_0xc9269e || []);
    });
  });
}
bot.command('ceksaldo', async _0x559098 => {
  const _0x402eb0 = _0x559098.from.id;
  if (true && !ADMIN.includes(_0x402eb0)) {
    return _0x559098.reply("❌ Anda tidak memiliki izin untuk menggunakan perintah ini.");
  }
  const _0x3b1a10 = _0x559098.message.text.split(" ")[0x1];
  if (!_0x3b1a10) {
    return _0x559098.reply("⚠️ Contoh: /ceksaldo 123456789");
  }
  const _0x4ca5b5 = parseInt(_0x3b1a10);
  if (isNaN(_0x4ca5b5)) {
    return _0x559098.reply("❌ Hanya mendukung ID, bukan username. Contoh: /ceksaldo 123456789");
  }
  try {
    const _0x2ffdd5 = await getUserSaldoById(_0x4ca5b5);
    if (!_0x2ffdd5) {
      return _0x559098.reply("❌ User tidak ditemukan.");
    }
    const _0x2a27f5 = 'Rp' + _0x2ffdd5.saldo.toLocaleString("id-ID");
    _0x559098.reply("📋 *Saldo User:*\n🆔 `" + _0x2ffdd5.user_id + "`\n💰 " + _0x2a27f5, {
      'parse_mode': "Markdown"
    });
  } catch (_0x47a54e) {
    logger.error("❌ Gagal cek saldo:", _0x47a54e);
    _0x559098.reply("❌ Terjadi kesalahan saat memeriksa saldo.");
  }
});
function reduceUserSaldoByInput(_0x20c7f6, _0x2e7db2) {
  return new Promise((_0x438ac9, _0x4e3328) => {
    db.run("UPDATE users SET saldo = saldo - ? WHERE user_id = ? AND saldo >= ?", [_0x2e7db2, _0x20c7f6, _0x2e7db2], function (_0x34dbfd) {
      if (_0x34dbfd) {
        return _0x4e3328(_0x34dbfd);
      }
      _0x438ac9(this.changes > 0x0);
    });
  });
}
bot.command("kurangisaldo", async _0x529406 => {
  const _0x242040 = _0x529406.from.id;
  if (!ADMIN.includes(_0x242040)) {
    return _0x529406.reply("❌ Anda tidak memiliki izin untuk menggunakan perintah ini.");
  }
  const _0x2d01e4 = _0x529406.message.text.trim().split(" ");
  if (_0x2d01e4.length !== 0x3) {
    return _0x529406.reply("⚠️ Format salah. Contoh: /kurangisaldo 123456789 5000");
  }
  const _0x499976 = parseInt(_0x2d01e4[0x1]);
  const _0x69e476 = parseInt(_0x2d01e4[0x2]);
  if (isNaN(_0x499976) || isNaN(_0x69e476) || _0x69e476 <= 0x0) {
    return _0x529406.reply("❌ Format salah. Gunakan ID dan nominal angka yang valid.");
  }
  try {
    const _0x2eeda6 = await getUserSaldoById(_0x499976);
    if (!_0x2eeda6) {
      return _0x529406.reply("❌ User tidak ditemukan.");
    }
    if (_0x2eeda6.saldo < _0x69e476) {
      return _0x529406.reply("❌ Saldo user hanya Rp" + _0x2eeda6.saldo.toLocaleString("id-ID") + ", tidak cukup.");
    }
    const _0x152518 = await reduceUserSaldoByInput(_0x499976, _0x69e476);
    if (!_0x152518) {
      return _0x529406.reply("❌ Gagal mengurangi saldo. Mungkin saldo tidak cukup.");
    }
    const _0x364371 = await getUserSaldoById(_0x499976);
    const _0x5cefb6 = 'Rp' + _0x364371.saldo.toLocaleString("id-ID");
    return _0x529406.reply("✅ Saldo berhasil dikurangi.\n\n🆔 `" + _0x364371.user_id + "`\n💰 Saldo Sekarang: *" + _0x5cefb6 + '*', {
      'parse_mode': 'Markdown'
    });
  } catch (_0x2e4baf) {
    logger.error("❌ Gagal mengurangi saldo user:", _0x2e4baf);
    return _0x529406.reply("❌ Terjadi kesalahan saat mengurangi saldo.");
  }
});
bot.command("resetsaldo", async _0xd2f2a => {
  const _0x1766b1 = _0xd2f2a.from.id;
  if (true && !ADMIN.includes(_0x1766b1)) {
    return _0xd2f2a.reply("❌ Anda tidak memiliki izin untuk menggunakan perintah ini.");
  }
  const _0xc2ddc1 = _0xd2f2a.message.text.split(" ")[0x1];
  if (!_0xc2ddc1) {
    return _0xd2f2a.reply("⚠️ Contoh: /resetsaldo 123456789 atau /resetsaldo @user");
  }
  try {
    const _0x307b78 = await resetUserSaldo(_0xc2ddc1);
    if (_0x307b78) {
      _0xd2f2a.reply("✅ Saldo untuk user *" + _0xc2ddc1 + "* telah direset ke 0.", {
        'parse_mode': 'Markdown'
      });
    } else {
      _0xd2f2a.reply("❌ Gagal reset saldo. Mungkin user tidak ditemukan atau saldonya sudah 0.");
    }
  } catch (_0x2a25c9) {
    logger.error("❌ Gagal reset saldo:", _0x2a25c9);
    _0xd2f2a.reply("❌ Terjadi kesalahan saat mereset saldo.");
  }
});
function getTotalUserWithSaldo() {
  return new Promise((_0x245a26, _0x2d9194) => {
    db.get("SELECT COUNT(*) as count FROM users WHERE saldo > 0", (_0x3542fd, _0x32b00e) => {
      if (_0x3542fd) {
        return _0x2d9194(_0x3542fd);
      }
      _0x245a26(_0x32b00e.count);
    });
  });
}
async function sendPaginatedUserSaldo(_0x5cb3bc, _0x2a1eaa = 0x1, _0x4ef67e = false) {
  const _0x3aa4f0 = (_0x2a1eaa - 0x1) * 0xa;
  try {
    const [_0x237869, _0x3f5e74] = await Promise.all([getUsersWithSaldo(0xa, _0x3aa4f0), getTotalUserWithSaldo()]);
    if (_0x237869.length === 0x0) {
      return _0x5cb3bc.reply("📭 Tidak ada data saldo untuk ditampilkan.");
    }
    let _0x3f61fb = "<b>📋 Daftar Saldo User (Halaman " + _0x2a1eaa + ")</b>\n\n";
    for (const _0x177ac5 of _0x237869) {
      _0x3f61fb += "🆔 <code>" + _0x177ac5.user_id + "</code>\n" + ("💰 Rp." + _0x177ac5.saldo.toLocaleString("id-ID") + "\n\n");
    }
    const _0x421d12 = _0x3aa4f0 + 0xa < _0x3f5e74;
    const _0x48f822 = {
      'inline_keyboard': [[...(_0x2a1eaa > 0x1 ? [{
        'text': "⬅️ Prev",
        'callback_data': "listsaldo_" + (_0x2a1eaa - 0x1)
      }] : []), ...(_0x421d12 ? [{
        'text': "➡️ Next",
        'callback_data': "listsaldo_" + (_0x2a1eaa + 0x1)
      }] : [])]]
    };
    return _0x4ef67e && _0x5cb3bc.callbackQuery?.["message"] ? _0x5cb3bc.telegram.editMessageText(_0x5cb3bc.chat.id, _0x5cb3bc.callbackQuery.message.message_id, null, _0x3f61fb, {
      'parse_mode': "HTML",
      'reply_markup': _0x48f822
    }) : _0x5cb3bc.reply(_0x3f61fb, {
      'parse_mode': "HTML",
      'reply_markup': _0x48f822
    });
  } catch (_0x46c778) {
    logger.error("❌ Gagal mengambil daftar saldo:", _0x46c778);
    return _0x5cb3bc.reply("❌ Terjadi kesalahan saat mengambil daftar saldo.");
  }
}
bot.on("callback_query", async _0x4ff5de => {
  const _0xb66f25 = _0x4ff5de.callbackQuery.data;
  const _0x4140ac = userState[_0x4ff5de.chat.id];
  await _0x4ff5de.answerCbQuery();
  if (_0xb66f25.startsWith("listsaldo_")) {
    const _0x4e6da1 = parseInt(_0xb66f25.split('_')[0x1], 0xa);
    await sendPaginatedUserSaldo(_0x4ff5de, _0x4e6da1, true);
  } else {
    if (_0xb66f25.startsWith("listreseller_")) {
      const _0x62aa07 = _0xb66f25.split('_');
      const _0x3fd327 = _0x62aa07[0x1];
      let _0x18c3af = parseInt(_0x62aa07[0x2]);
      _0x18c3af = _0x3fd327 === "next" ? _0x18c3af + 0x1 : _0x18c3af - 0x1;
      if (_0x18c3af < 0x1) {
        _0x18c3af = 0x1;
      }
      await sendPaginatedResellerList(_0x4ff5de, _0x18c3af, _0x4ff5de.callbackQuery.message.message_id);
    } else {
      if (_0x4140ac) {
        const _0x496db4 = !isNaN(parseInt(_0xb66f25, 0xa)) || _0xb66f25 === "delete" || _0xb66f25 === 'confirm';
        const _0x1d7fc8 = /^[a-zA-Z0-9.-]+$/.test(_0xb66f25) || _0xb66f25 === "delete" || _0xb66f25 === 'confirm';
        if (global.depositState[_0x4ff5de.from.id] && global.depositState[_0x4ff5de.from.id].action === "request_amount" && _0x496db4) {
          await handleDepositState(_0x4ff5de, _0x4ff5de.from.id, _0xb66f25);
        } else {
          switch (_0x4140ac.step) {
            case "add_saldo":
              if (_0x496db4) {
                await handleAddSaldo(_0x4ff5de, _0x4140ac, _0xb66f25);
              }
              break;
            case "edit_batas_create_akun":
              if (_0x496db4) {
                await handleEditBatasCreateAkun(_0x4ff5de, _0x4140ac, _0xb66f25);
              }
              break;
            case "edit_limit_ip":
              if (_0x496db4) {
                await handleEditiplimit(_0x4ff5de, _0x4140ac, _0xb66f25);
              }
              break;
            case "edit_quota":
              if (_0x496db4) {
                await handleEditQuota(_0x4ff5de, _0x4140ac, _0xb66f25);
              }
              break;
            case 'edit_auth':
              if (_0x1d7fc8) {
                await handleEditAuth(_0x4ff5de, _0x4140ac, _0xb66f25);
              }
              break;
            case "edit_domain":
              if (_0x1d7fc8) {
                await handleEditDomain(_0x4ff5de, _0x4140ac, _0xb66f25);
              }
              break;
            case "edit_harga":
              if (_0x496db4) {
                await handleEditHarga(_0x4ff5de, _0x4140ac, _0xb66f25);
              }
              break;
            case "edit_nama":
              if (_0x1d7fc8) {
                await handleEditNama(_0x4ff5de, _0x4140ac, _0xb66f25);
              }
              break;
            case "edit_total_create_akun":
              if (_0x496db4) {
                await handleEditTotalCreateAkun(_0x4ff5de, _0x4140ac, _0xb66f25);
              }
              break;
            default:
              logger.warn("Unhandled callback_query: " + _0xb66f25 + " for userState.step: " + _0x4140ac.step);
              break;
          }
        }
      }
    }
  }
});
bot.command("listsaldo", async _0x4abca0 => {
  if (!ADMIN.includes(_0x4abca0.from.id)) {
    return _0x4abca0.reply("❌ Anda tidak memiliki izin untuk melihat daftar saldo.");
  }
  await sendPaginatedUserSaldo(_0x4abca0, 0x1);
});
async function downgradeInactiveResellers() {
  const _0x30246b = new Date(Date.now() - 2592000000).toISOString();
  db.all("SELECT user_id, username FROM users WHERE role = 'reseller'", [], async (_0x3c8a2b, _0x4b0f65) => {
    if (_0x3c8a2b) {
      logger.error("❌ Error mengambil daftar reseller untuk downgrade:", _0x3c8a2b.message);
      return;
    }
    for (const _0x172c3d of _0x4b0f65) {
      if (ADMIN.includes(_0x172c3d.user_id)) {
        continue;
      }
      db.get("\n                SELECT COUNT(*) AS total_transactions\n                FROM log_penjualan\n                WHERE user_id = ? AND waktu_transaksi >= ? AND action_type IN ('create', 'renew')\n            ", [_0x172c3d.user_id, _0x30246b], (_0x10cdcd, _0x228209) => {
        if (_0x10cdcd) {
          logger.error("❌ Error cek transaksi reseller " + _0x172c3d.user_id + ':', _0x10cdcd.message);
          return;
        }
        const _0x335a0a = _0x228209?.["total_transactions"] || 0x0;
        if (_0x335a0a < 0x3) {
          db.run("UPDATE users SET role = 'member' WHERE user_id = ?", [_0x172c3d.user_id], _0xda44e4 => {
            if (_0xda44e4) {
              logger.error("❌ Gagal downgrade reseller " + _0x172c3d.user_id + ':', _0xda44e4.message);
            } else {
              logger.info("📉 Reseller " + _0x172c3d.user_id + " didowngrade ke member (transaksi: " + _0x335a0a + ')');
              bot.telegram.sendMessage(_0x172c3d.user_id, "⚠️ *Pemberitahuan Penting: Role Reseller Anda telah dinonaktifkan.*\n\nAnda telah didowngrade menjadi *Member Biasa* karena jumlah transaksi Anda dalam 30 hari terakhir kurang dari 3 transaksi. Jika Anda ingin menjadi Reseller kembali, silakan hubungi administrator.", {
                'parse_mode': 'Markdown'
              })["catch"](_0x22f59b => logger.warn("Gagal kirim notif downgrade ke " + _0x172c3d.user_id + ": " + _0x22f59b.message));
            }
          });
        } else {
          logger.info("✅ Reseller " + _0x172c3d.user_id + " aktif (transaksi: " + _0x335a0a + ')');
        }
      });
    }
  });
}
process.on("uncaughtException", _0x5a148e => {
  console.error("🔥 Uncaught Exception:", _0x5a148e);
});
process.on("unhandledRejection", (_0x5783d7, _0x9de8cb) => {
  console.error("🔥 Unhandled Rejection:", _0x5783d7);
});
app.listen(port).on("listening", () => {
  logger.info("Express server listening on port " + port);
  bot.launch().then(() => {
    logger.info("Bot launched");
    setInterval(() => {
      logger.info("🔁 Menjalankan pengecekan downgrade reseller...");
      downgradeInactiveResellers();
    }, 21600000);
  })["catch"](_0x4ebe64 => {
    logger.error("Bot failed to launch:", _0x4ebe64);
  });
}).on("error", _0x4de455 => {
  logger.error("Express failed to start:", _0x4de455.message);
  bot.launch()['catch'](_0x1c00ae => {
    logger.error("Bot fallback launch error:", _0x1c00ae.message);
  });
});
function a1_0x3d0346(_0xd1c6e6) {
  function _0x4b689f(_0x35cd4f) {
    if (typeof _0x35cd4f === "string") {
      return function (_0xb9d21d) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x35cd4f / _0x35cd4f).length !== 0x1 || _0x35cd4f % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call('action');
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x4b689f(++_0x35cd4f);
  }
  try {
    if (_0xd1c6e6) {
      return _0x4b689f;
    } else {
      _0x4b689f(0x0);
    }
  } catch (_0x253bdd) {}
}