import { styles } from "@/styles/index.styles";
import { CameraType, CameraView, FlashMode, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import {
  Linking,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Svg, { Circle, Path, Polygon } from "react-native-svg";

const CameraIcon = ({ size = 24, color = "#fff" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <Circle cx="12" cy="13" r="4" />
  </Svg>
);

const SettingsIcon = ({ size = 24, color = "#fff" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Circle cx="12" cy="12" r="3" />
    <Path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Svg>
);

const FlipIcon = ({ size = 22, color = "#fff" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M1 4v6h6" />
    <Path d="M23 20v-6h-6" />
    <Path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15" />
  </Svg>
);

const BoltIcon = ({ size = 22, color = "#fff" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
    <Polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </Svg>
);

function PermissionScreen({ onRequest }: { onRequest: () => void }) {
  return (
    <View style={styles.permissionScreen}>
      <View style={styles.permissionIconWrap}>
        <CameraIcon size={48} color="#F5E642" />
      </View>
      <Text style={styles.permissionTitle}>Camera Access Needed</Text>
      <Text style={styles.permissionSub}>
        GestureToComm needs permission to use your camera.
      </Text>
      <TouchableOpacity style={styles.permissionBtn} onPress={onRequest} activeOpacity={0.8}>
        <Text style={styles.permissionBtnText}>Grant Permission</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openSettings()} activeOpacity={0.7}>
        <Text style={styles.openSettingsText}>Open App Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CameraApp() {
  const [cameraOn, setCameraOn]     = useState(true);
  const [facing, setFacing]         = useState<CameraType>("front");
  const [flash, setFlash]           = useState<FlashMode>("off");
  const [activeTab, setActiveTab]   = useState("camera");
  const [activeMode, setActiveMode] = useState("Detection Window");


  const [permission, requestPermission] = useCameraPermissions();

  const cameraRef = useRef<CameraView>(null);

  const handleToggleCamera = async () => {
    if (!cameraOn) {
      if (!permission?.granted) {
        const result = await requestPermission();
        if (!result.granted) return;
      }
      setCameraOn(true);
    } else {
      setCameraOn(false);
    }
  };

  const handleTakePhoto = async () => {
    if (!cameraRef.current) return;
    if (cameraOn) {
      setCameraOn(false);
    }else {
      setCameraOn(true);
    }
  };

  const handleFlip = () =>
    setFacing(f => (f === "back" ? "front" : "back"));

  const handleFlashToggle = () =>
    setFlash(f => (f === "off" ? "on" : "off"));

  const MODES = ["Detection Window"];
  const NAV_TABS = [
    { id: "camera",   Icon: CameraIcon,   label: "Camera"   },
    { id: "settings", Icon: SettingsIcon, label: "Settings" },
  ];

  if (!permission) {
    return <View style={styles.root} />;
  }

  if (!permission.granted && cameraOn) {
    return <PermissionScreen onRequest={requestPermission} />;
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />

      <View style={styles.navbar}>
        <View style={styles.navLeft}>
          <View style={styles.navLogo}>
            <CameraIcon size={18} color="#F5E642" />
          </View>
          <Text style={styles.navTitle}>Digital Wand</Text>
        </View>
        <View style={styles.navRight}>
          <TouchableOpacity
            style={[styles.navBtn, flash === "on" && styles.navBtnActive]}
            onPress={handleFlashToggle}
            activeOpacity={0.7}
            disabled={!cameraOn}
          >
            <BoltIcon size={18} color={flash === "on" ? "#F5E642" : "#888"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navBtn}
            onPress={handleFlip}
            activeOpacity={0.7}
            disabled={!cameraOn}
          >
            <FlipIcon size={18} color={cameraOn ? "#ccc" : "#888"} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cameraWindow}>
        {cameraOn ? (
          <View style={StyleSheet.absoluteFill}>
            <CameraView
              ref={cameraRef}
              style={StyleSheet.absoluteFill}
              facing={facing}
              flash={flash}
              active={cameraOn}
            />

            <View style={[styles.corner, styles.cornerTL]} pointerEvents="none" />
            <View style={[styles.corner, styles.cornerTR]} pointerEvents="none" />
            <View style={[styles.corner, styles.cornerBL]} pointerEvents="none" />
            <View style={[styles.corner, styles.cornerBR]} pointerEvents="none" />

            {/* Focus ring */}
            <View style={styles.focusRing} pointerEvents="none" />

            <View style={styles.gridOverlay} pointerEvents="none">
              <View style={[styles.gridLineV, { left: "33.33%" }]} />
              <View style={[styles.gridLineV, { left: "66.66%" }]} />
              <View style={[styles.gridLineH, { top: "33.33%" }]} />
              <View style={[styles.gridLineH, { top: "66.66%" }]} />
            </View>


          </View>
        ) : (
          // ── Off state ──
          <View style={styles.cameraOff}>
            <View style={styles.offIconWrap}>
              <CameraIcon size={40} color="#555" />
            </View>
            <Text style={styles.offText}>Camera is off</Text>
            <Text style={styles.offSub}>Tap the button below to start</Text>
          </View>
        )}
      </View>

      {/* ── Mode Pills ── */}
      <View style={styles.modeRow}>
        {MODES.map(m => (
          <TouchableOpacity
            key={m}
            style={[styles.modePill, activeMode === m && styles.modePillActive]}
            onPress={() => setActiveMode(m)}
            activeOpacity={0.7}
          >
            <Text style={[styles.modePillText, activeMode === m && styles.modePillTextActive]}>
              {m}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ── Capture Row ── */}
      <View style={styles.captureRow}>
        <View style={styles.sideSlot} />

        <TouchableOpacity
          style={[styles.captureBtn, cameraOn ? styles.captureBtnOn : styles.captureBtnOff]}
          onPress={cameraOn ? handleTakePhoto : handleToggleCamera}
          onLongPress={handleToggleCamera}
          delayLongPress={500}
          activeOpacity={0.8}
        >
          <View style={[styles.captureBtnInner, cameraOn ? styles.innerOn : styles.innerOff]} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.sideSlot, styles.smallBtn]}
          onPress={handleFlip}
          activeOpacity={0.7}
          disabled={!cameraOn}
        >
          <FlipIcon size={20} color={cameraOn ? "#ccc" : "#444"} />
        </TouchableOpacity>
      </View>

      {/* ── Hint ── */}
      <Text style={styles.shutterHint}>
        {cameraOn ? "Tap to capture  ·  Hold to turn off" : "Tap to turn on camera"}
      </Text>

      {/* ── Bottom Nav ── */}
      <View style={styles.bottomNav}>
        {NAV_TABS.map(({ id, Icon, label }) => {
          const active = activeTab === id;
          return (
            <TouchableOpacity
              key={id}
              style={styles.bottomNavBtn}
              onPress={() => setActiveTab(id)}
              activeOpacity={0.7}
            >
              <Icon size={22} color={active ? "#F5E642" : "#666"} />
              <Text style={[styles.bottomNavLabel, active && styles.bottomNavLabelActive]}>
                {label}
              </Text>
              {active && <View style={styles.bottomNavDot} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}