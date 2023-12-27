#![deny(clippy::all)]

use napi_derive::napi;

#[global_allocator]
static ALLOC: mimalloc::MiMalloc = mimalloc::MiMalloc;

#[napi]
#[inline(always)]
pub fn v4() -> String {
  uuid::Uuid::new_v4().to_string()
}
