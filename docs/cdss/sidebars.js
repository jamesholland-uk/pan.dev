/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  iot: [
    {
      type: "category",
      label: "IoT API",
      items: [
        {
          type: "autogenerated",
          dirName: "cdss/iot/api",
        },
      ],
    },
  ],
  tp_docs: require("./threat-vault/docs/sidebar"),
  tp: [
    "cdss/threat-vault/api/threatapi",
    require("./threat-vault/api/sidebar"),
  ],
};
