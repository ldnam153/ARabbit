package com.arabbit;

import android.annotation.SuppressLint;
import android.os.Bundle;

import com.facebook.react.ReactActivity;

import java.util.ArrayList;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  static public ArrayList<ProductModel> products = new ArrayList<>();

  @SuppressLint("UseCompatLoadingForDrawables")
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
    products.add(new ProductModel("2", "Bánh cracker vị rau AFC", "Kinh đô", "Bánh có bổ sung khoai tây, cung cấp năng lượng, protein, chất xơ, đặc biệt là vitamin D và canxi giúp xương chắc khỏe.",
            getDrawable(R.drawable.kinhdo), getDrawable(R.drawable.afc), 367, "28.600 VND", 4));
    products.add(new ProductModel("8", "Mì 3 miền tôm chua cay", "UNIBEN", "Đây là một mỳ ăn liền với hương vị tôm chua cay.",
            getDrawable(R.drawable.uniben), getDrawable(R.drawable.mi3mien), 2000, "4.6000 VND", 5));
  }
  @Override
  protected String getMainComponentName() {
    return "ARabbit";
  }
}
