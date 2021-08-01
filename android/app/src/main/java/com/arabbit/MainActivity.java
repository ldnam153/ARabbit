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
    products.add(new ProductModel("1", "Bánh AFC", "Kinh đô", "Đây là một loại bán ngon",
            getDrawable(R.drawable.kinhdo), getDrawable(R.drawable.afc), 367, 28000, 4));
    products.add(new ProductModel("2", "Mì 3 miền", "UNIBEN", "Đây là một mỳ ăn liền",
            getDrawable(R.drawable.uniben), getDrawable(R.drawable.mi3mien), 2000, 4000, 5));
  }
  @Override
  protected String getMainComponentName() {
    return "ARabbit";
  }
}
