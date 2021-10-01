#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use napi::bindgen_prelude::*;

#[napi]
fn v4() -> String {
  uuid::Uuid::new_v4().to_string()
}
