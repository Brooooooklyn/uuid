#![deny(clippy::all)]

use napi_derive::napi;

#[napi]
pub fn v4() -> String {
  uuid::Uuid::new_v4().to_string()
}
