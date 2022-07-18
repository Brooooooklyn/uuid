#![deny(clippy::all)]

use napi_derive::napi;

#[cfg(not(all(target_os = "linux", target_env = "musl", target_arch = "aarch64")))]
#[global_allocator]
static ALLOC: mimalloc_rust::GlobalMiMalloc = mimalloc_rust::GlobalMiMalloc;

#[napi]
pub fn v4() -> String {
  uuid::Uuid::new_v4().to_string()
}
