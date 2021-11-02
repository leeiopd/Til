const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment-timezone");

const ProductsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "제품명을 입력해주세요."],
    },
    price: Number,
    description: String,
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  // collection name 을 추가 작성하지 않으면, 모두 소문자 + s 가 붙은 복수형으로 작성됨
  { collection: "Products" }
);

ProductsSchema.methods.dateFormat = function () {
  return moment(this.createdAt)
    .tz("Asia/Seoul")
    .format("MMMM Do YYYY, h:mm:ss a");
};

module.exports = mongoose.model("Products", ProductsSchema);
