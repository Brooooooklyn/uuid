#![deny(clippy::all)]

use napi::bindgen_prelude::*;
use napi_derive::napi;

#[napi]
fn v4() -> String {
  uuid::Uuid::new_v4().to_string()
}
